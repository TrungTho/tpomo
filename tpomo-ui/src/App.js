import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="top-noti top-noti--hide">
          <div class="top-noti-content">This is an notification</div>
        </div>
        <div class="wrapper">
          <div class="header">
            <h1 class="main__title">Ninja Deletion App </h1>
            <img src="./icons/ninjaIcon.png" alt="" />
            <i class="fa-solid fa-bars hearder__menu-icon">
              <div class="header__menu">
                <div class="header__menu-item" id="btnConfigTelegram">
                  <i class="fa-brands fa-telegram"></i>
                  Telegram token
                </div>
                <div class="header__menu-item">
                  <i class="fa-solid fa-circle-info"></i>
                  <a
                    href="https://github.com/TrungTho/NinjaDeletion"
                    target="_blank"
                  >
                    About
                  </a>
                </div>
              </div>
            </i>
          </div>
          <hr />
          <div class="main">
            <div class="main__buttons">
              <button id="btnChoose">
                <div class="button__circle"></div>
                <p class="main__button-name">Choose files</p>
              </button>
              <button id="btnChooseFolder">
                <div class="button__circle"></div>
                <p class="main__button-name"> Choose folder</p>
              </button>
              <button id="btnReset">
                <div class="button__circle"></div>
                <p class="main__button-name">Reset</p>
              </button>
            </div>
            <ul class="main__list" id="listToDel">
              <div class="main__item main__item--file">
                <div class="main__item-left">
                  <button class="main__item-btn-remove icon-button">
                    <i class="fa-regular fa-trash-can "></i>{" "}
                  </button>
                  <p class="main__item-file-path">fauksefbawak</p>
                </div>
                <p class="main__item-type" id="itemType">
                  file
                </p>
              </div>
              <div class="main__item main__item--folder">
                <div class="main__item-left">
                  <button class="main__item-btn-remove icon-button">
                    <i class="fa-regular fa-trash-can"></i>{" "}
                  </button>
                  <p class="main__item-file-path">fauksefbawak</p>
                </div>
                <p class="main__item-type" id="itemType">
                  file
                </p>
              </div>
            </ul>

            <div class="main__timer">
              <input
                type="number"
                min="0"
                name="inpDelayTime"
                id="inpDelayTime"
                class="main__timer-input"
                placeholder="0s"
                size="5"
              />
              <button
                id="btnStart"
                class="main__timer-button icon-button"
                style="--glow-color:#00FFD1"
              >
                <i class="fa-regular fa-circle-play fa-3x"></i>
              </button>
              <button
                id="btnStop"
                class="main__timer-button icon-button"
                style="--glow-color:#FF1E1E"
              >
                <i class="fa-regular fa-circle-stop fa-3x"></i>
              </button>
            </div>
          </div>
          <hr />
          <footer class="footer">
            <div class="footer__option">
              <input
                type="checkbox"
                name="checkFinishClose"
                id="checkFinishClose"
              />
              <label
                for="checkFinishClose"
                title="Do you want to close application when finish?"
              >
                Close when finish?
              </label>
            </div>
            <div class="footer__option">
              <input
                type="checkbox"
                name="checkLogResult"
                id="checkLogResult"
                checked="true"
              />
              <label
                for="checkLogResult"
                title="Do you want to send result logs via telegram?"
              >
                Sync log?
              </label>
            </div>
            <div class="footer__option">
              <input
                type="checkbox"
                name="checkKillProcess"
                id="checkKillProcess"
                checked="true"
              />
              <label
                for="checkKillProcess"
                title="Do you want to excec command and kill some processes before deletion?"
              >
                Kill process?
              </label>
            </div>
            <div class="footer__option">
              <input
                type="checkbox"
                name="checkPdfTemplate"
                id="checkPdfTemplate"
                checked="true"
              />
              <label
                for="checkPdfTemplate"
                title="Use default template, we have acrobat, foxitreader, javelin"
              >
                Use template?
              </label>
            </div>
            <input
              type="text"
              title="Input more processes to kill before deletion"
              name="inpProcesses"
              id="inpProcesses"
              placeholder="More processes separate by ,"
            />
            <button id="btnHide" title="Hide to tray">
              <i class="fa-solid fa-eye-slash"></i>
            </button>
          </footer>
          <script src="js/neutralino.js"></script>
          <script src="js/main.js" type="module"></script>
        </div>
        <div class="telegram-section hide">
          <div class="telegram-wrapper">
            <div class="page">
              <div class="description">
                The application will use this information to send logs to
                telegram chat after the deletion process finish.
              </div>
              <div class="field field_v2">
                <label for="inpBotToken" class="ha-screen-reader">
                  Bot Token
                </label>
                <input
                  id="inpBotToken"
                  class="field__input"
                  placeholder="Your Telegram Bot's Token"
                />
                <span class="field__label-wrap" aria-hidden="true">
                  <span class="field__label">Bot Token</span>
                </span>
              </div>
              <div class="field field_v2">
                <label for="inpChatId" class="ha-screen-reader">
                  Chat ID
                </label>
                <input
                  id="inpChatId"
                  class="field__input"
                  placeholder="e.g. -1134142"
                />
                <span class="field__label-wrap" aria-hidden="true">
                  <span class="field__label">Chat ID</span>
                </span>
              </div>
            </div>
            <a
              class="guide-link"
              href="https://github.com/TrungTho/NinjaDeletion#telegram-config"
              target="_blank"
            >
              Don't know how to get these information?
            </a>
            <div class="btn-container">
              <button class="btn btn-test-api" id="btnTestTelegramAccount">
                <i class="fa-solid fa-paper-plane"></i>
                <div class="button__circle" style="--glow-color:#229ED9"></div>
                <p>Test Msg</p>
              </button>
              <button class="btn btn-save" id="btnSaveTelegramConfig">
                <i class="fa-solid fa-floppy-disk"></i>
                <div class="button__circle" style="--glow-color:#00FFD1"></div>
                <p>Save</p>
              </button>
              <button class="btn btn-cancel" id="btnCancelTelegramConfig">
                <i class="fa-solid fa-xmark"></i>
                <div class="button__circle" style="--glow-color:#FF1E1E"></div>
                <p>Cancel</p>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
