const template = document.createElement('template');

const ctaLink =
  'https://github.com/androiddevnotes';

template.innerHTML = `
    <style>
        :host {
            display: block;
            container-type: inline-size;
            container-name: ph-banner;
        }

        .banner {
            display: inline-block;
            height: 48px;
            width: 100%;
            background: #2400F9;
            align-items: center;
            text-align: center;
            line-height: 48px;
        }

        .banner-image {
            display: inline-flex;
            align-items: center;
        }

        .banner-content {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 14px;
        }

        .banner-text {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 500;
        }

        .banner-primary-text {
            padding-left: 12px;
        }

        .banner-text span {
            font-weight: bold;
        }

        .banner-cta-container {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
        }

        .banner-cta {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 6px 12px;
            gap: 4px;
            background: #FFFFFF;
            border-radius: 4px;
            height: 24px;
            color: #2400F9;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: bold;
        }

        .close-banner {
            text-decoration: none;
            cursor: pointer;
            margin: 0 12px;
            float: right;
            height: 48px;
        }

        .close-banner .banner-content {
            display: flex;
            height: 100%;
            justify-content: center;
            align-items: center;
        }

        @container (max-width: 768px) {
            .banner-image {
                display: none;
            }
        }

        @container (max-width: 768px) {
            .banner {
                height: auto;
            }

            .banner-image {
                display: none;
            }

            .banner-content {
                flex-direction: column;
                align-items: center;
            }

            .banner-primary-text {
                padding-left: 0;
            }

            .banner-cta-container {
                display: inline-flex;
                flex-direction: row-reverse;
                padding-left: 8px;
                justify-content: space-between;
            }

            .close-banner {
                line-height: 48px;
            }

            .close-banner .banner-content {
                justify-content: center;
            }
        }

        @container (max-width: 375px) {
            .banner {
                height: auto;
            }

            .banner-image {
                display: none;
            }

            .banner-content {
                flex-direction: column;
                align-items: center;
                font-size: 15px;
            }

            .banner-text {
                font-size: 15px;
            }

            .banner-primary-text {
                padding-left: 0;
            }

            .banner-cta-container {
                display: inline-flex;
                flex-direction: row-reverse;
                padding-left: 8px;
                justify-content: space-between;
            }

            .close-banner {
                line-height: 48px;
            }

            .close-banner .banner-content {
                justify-content: center;
            }
        }

    </style>
    <div role='banner' id='ph-banner' class='banner'>
        <div class='banner-content'>
            <div class='banner-text banner-primary-text'>Preview Release: Android Dev Notes!</div>
            <div class='banner-cta-container'>
                <a style='text-decoration: none; cursor: pointer; margin: 0 12px;' target='_blank' href='${ctaLink}'><div class='banner-cta'>Explore Android</div></a>
            </div>
        </div>
        <a id='close-ph-banner' class='close-banner'>
            <div class='banner-content' id='close-banner'><img src='/img/cross.svg' alt='Close'/></div>
        </a>
    </div>
`;
const DAY = 1000 * 60 * 60 * 24;
const COOKIE_NAME = 'ph-banner';

function setCookie(value) {
  const date = new Date();
  date.setTime(date.getTime() + DAY);
  document.cookie = `${COOKIE_NAME}=${value}; expires=${date.toUTCString()}; path=/; domain=.androiddevnotes.com;`;
}

function setLocalStorage(hide) {
  localStorage.setItem('docusaurus.announcement.id', COOKIE_NAME);
  localStorage.setItem('docusaurus.announcement.dismiss', hide);
}

function getCookieValue() {
  // get cookie from parent domain if exists
  const cookies = document.cookie.split(';');
  const cookie = cookies.find((c) => c.includes(`${COOKIE_NAME}=`));
  if (cookie) {
    const value = cookie.split('=')[1];
    return parseInt(value, 10);
  }

  return 0;
}

function hideBanner() {
  setCookie(new Date().getTime());
  setLocalStorage(true);
}

function showBanner() {
  setCookie(new Date().getTime() - DAY);
  setLocalStorage(false);
}

// if banner is dismissed, don't show banner
function showByLocalStore() {
  if (localStorage.getItem('docusaurus.announcement.id') !== COOKIE_NAME)
    return true;
  const value = localStorage.getItem('docusaurus.announcement.dismiss');
  return value === 'false';
}

// if cookie value is 24 hours ago or more, return true
function showByCookie() {
  const cookieStatus = getCookieValue();
  const diff = new Date().getTime() - cookieStatus;
  return diff > DAY;
}

// if status is 24 hours ago or more, show banner
// if banner is dismissed, don't show banner
function shouldShowBanner() {
  return showByCookie() && showByLocalStore();
}

class Banner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const element = this.shadowRoot.getElementById(COOKIE_NAME);
    if (!shouldShowBanner()) {
      if (!showByCookie() || !showByLocalStore()) {
        hideBanner();
      }
      element.style.display = 'none';
      return;
    }

    element.style.display = 'inline-block';
    this.shadowRoot
      .getElementById('close-ph-banner')
      .addEventListener('click', () => {
        this.shadowRoot.getElementById(COOKIE_NAME).style.display = 'none';
        hideBanner();
        const event = new CustomEvent('hideBanner');
        this.dispatchEvent(event);
        // Only for docs portal
        window.location.reload();
      });
  }
}

window.customElements.define(COOKIE_NAME, Banner);
