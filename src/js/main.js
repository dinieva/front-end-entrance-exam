import '../assets/css/style.css'/* ../css/style.css */
import { editableElements } from './editableElements.js'
import { profileImage } from './profileImage.js'
import { observerMutation } from './observer.js'
import { generatePdf } from './download.js'


/* document.querySelector('#app').innerHTML = `
<div class="container" >
    <div id="content">
    <div class="block">
      <div class="profile">
        <div class="profile-image box">
          <label for="profileImage"> 
          <img id="preview" src="/public/profileImg.jpg" alt="Фото профиля" />
          </label>
          <input type="file" id="profileImage"  accept="image/*" />
        </div>
            
        <div class="greeting box">
          <span class="greeting-text editable"  id="greeting" contenteditable>Hello 👋🏻 I’m</span>
          <div class="profile-info">
            <p class="profile__name editable" contenteditable>Karthik SR</p>
            <p class="profile__role editable" contenteditable>UX/UI Designer</p>
          </div> 
        </div>
      </div>
      
      <div class="languages box">
        <h3>Languages</h3>
        <div class="language-scales">
          <div class="language-scale">
            <p class="language-scale__title editable" contenteditable>English</p>
            <progress value='100' max='100' contenteditable></progress>
            <input type="range" id="volume" name="volume" min="0" max="100" contenteditable />
          </div>
          <div class="language-scale">
            <p class="language-scale__title editable" contenteditable>Malayalam</p>
            <progress value='100' max='100' contenteditable></progress>
          </div>
          <div class="language-scale">
            <p class="language-scale__title editable" contenteditable>Hindi</p>
            <progress value='80' max='100' contenteditable></progress>
          </div>
        </div>
      </div>
    </div>

    <div class="block ">
      <div class="experience box">
        <h3>Experience</h3>
        <div class="job-list">
          <div class="job-item last-job box-item">
            <div class="job-header">
              <p class="job-date last editable" contenteditable>Jun. 2023 - Present </p>
            
            </div>
            <div class="job-info">
              <div>
                <p class="job__role editable" contenteditable>Marketing Manager </p>
                <div class="job__details">
                  <p  class="job__activity last editable" contenteditable>Pankayam</p>
                  <span class="divider last">|</span>
                  <p class="job__schedule last editable"  contenteditable>Full-time</p>
                </div>
                
              </div>
              <div class="job-points">
                <ul>
                  <li class="editable" contenteditable>Strategy development and planning of campaigns that promote the business and generate genuine traffic</li>
                  <li class="editable" contenteditable>SEO Content Creation for Blogs, Website, Social media</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="job-item box-item">
            <div class="job-header">
              <p class="job-date" contenteditable>2017 - Present</p>
            </div>
            <div class="job-info">
              <div>
                <p class="job__role" contenteditable>Graphic / Web designer </p>
                <p class="job__details" contenteditable>Freelance</p>
              </div>
              <div class="job-points">
                <ul>
                  <li class="editable" contenteditable> Development of internal projects from scratch, product design of brands </li>
                  <li class="editable" contenteditable> Landing page, webapps and hybrid apps</li>
                  <li class="editable" contenteditable> Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="job-item box-item">
            <div class="job-header">
              <p class="job-date" contenteditable>Sep. 2021 - Jun. 2023</p>
            </div>
            <div class="job-info">
              <div>
                <p class="job__role" contenteditable>Legal Assistant </p>
                <div class="job__details">
                  <p  class="job__activity" contenteditable>Law Firm</p>
                  <span class="divider">|</span>
                  <p class="job__schedule"  contenteditable>Intern</p>
                </div>
                
              </div>
              <div class="job-points">
                <ul>
                  <li class="editable" contenteditable>Provide administrative support to lawyer and enhance office effectiveness</li>
                  <li class="editable" contenteditable>Handle communication with clients, witnesses etc.</li>
                  <li class="editable" contenteditable>repare case briefs and summarize depositions, interrogatories and testimony</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tools box">
        <h3>Tools</h3>
        
          <div class="tools-list">
            <div class="tools-item box-item category design">
              <img id="preview" src="/public/tool-icons/logoFigma.png" alt="logoFigma" />
              <img id="preview" src="/public/tool-icons/icon_adobe-photoshop.png" alt="adobe photoshop" />
              <img id="preview" src="/public/tool-icons/adobe-illustrator.png" alt="adobe-illustrator" />
              <img id="preview" src="/public/tool-icons/icon_adobe-premiere.png" alt="adobe-premiere" />
              <img id="preview" src="/public/tool-icons/logoNotion.png" alt="logoNotion" />
              <img id="preview" src="/public/tool-icons/logoMeet.png" alt="logoMeet" />
            </div>
            <div class="tools-item box-item category no-code">
              <img id="preview" src="/public/tool-icons/logoZapier.png" alt="logoZapier" />
              <img id="preview" src="/public/tool-icons/logoWebflow.png" alt="logoWebflow" />
              <img id="preview" src="/public/tool-icons/logoFramer.png" alt="logoFramer" />
              <img id="preview" src="/public/tool-icons/logoWordpress.png" alt="logoWordpress" />
            </div>
            <div class="tools-item box-item category artificial-intelligence">
              <img id="preview" src="/public/tool-icons/logoChatGPT.png" alt="logoChatGPT" />
              <img id="preview" src="/public/tool-icons/logoCopilot.png" alt="logoCopilot" />
              <img id="preview" src="/public/tool-icons/logoMidjourney.png" alt="logoMidjourney" />
            </div>
          </div>
        
      </div>
    </div>

    <div class="block">
      <div class="education box">
        <h3>Education</h3>
        <div class="education-list">
          <div class="education-item last box-item">
            <div class="education-item__period last editable"><p contenteditable>2023</p></div>
            <div class="education-item__title editable"><p contenteditable>UI/UX</p></div>
            <div class="education-item__tags">
              <a href="#" class="education-item__link last">#UX</a>
              <a href="#" class="education-item__link last">#UI</a>
              <a href="#" class="education-item__link last">#research</a>
              <a href="#" class="education-item__link last">#DesignSystem</a>
              <a href="#" class="education-item__link last">#figma</a>
              <a href="#" class="education-item__link last">#Ux</a>
            </div>
            <div class="education-item__school editable"><p contenteditable>Coursrea</p></div>
          </div>
          <div class="education-item box-item">
            <div class="education-item__period editable"><p contenteditable>2017-2022</p></div>
            <div class="education-item__title editable"><p contenteditable>Law</p></div>
            <div class="education-item__tags">
              <a href="#" class="education-item__link">#law</a>
              <a href="#" class="education-item__link">#legalStudies</a>
              <a href="#" class="education-item__link">#contracts</a>
              <a href="#" class="education-item__link">#internationalLaws</a>
            </div>
            <div class="education-item__school editable"><p contenteditable>University of Kerala</p></div>
          </div>
          <div class="education-item box-item">
            <div class="education-item__period editable"><p contenteditable>2017</p></div>
            <div class="education-item__title editable"><p contenteditable>Graphic design</p></div>
            <div class="education-item__tags">
              <a href="#" class="education-item__link">#branding</a>
              <a href="#" class="education-item__link">#web</a>
              <a href="#" class="education-item__link">#illustration</a>
              <a href="#" class="education-item__link">#adobe</a>
            </div>
            <div class="education-item__school editable"><p contenteditable>Coursrea</p></div>
          </div>
        </div>
      </div>

      <div class="boxx">
        <div class="interests box">
          <h3>Interests</h3>
          <div class="interests-list">
            <span class="interests-item">branding</span>
            <span class="interests-item">design</span>
            <span class="interests-item">photography</span>
            <span class="interests-item">artificial-intelligence</span>
            <span class="interests-item">illustration</span>
            <span class="interests-item">typography</span>
            <span class="interests-item">social networks</span>
            <span class="interests-item">research</span>
            <span class="interests-item">dron pilot</span>
            <span class="interests-item">games</span>
          </div>
        </div>

        <div class="contact">
          <p class="editable" contenteditable>Let's chat! I'm ready to work on excinting projects</p>
          <a href="mailto:mail@htmlacademy.ru" class="editable" contenteditable>srkarthik.designscape@gmail.com</a>
        </div>
        
      </div>
      
    
    </div>
    </div>
  <div class="block__download-btn">
    <button class="download" id="print">Скачать в PDF </button>
  </div>
   
    
  </div>
  
` */

// setupCounter(document.querySelector('#profileImage'))
profileImage(document.querySelector('#profileImage'))
editableElements(document.querySelectorAll('.editable'))
observerMutation()
generatePdf()

