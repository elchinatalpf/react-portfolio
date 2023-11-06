import Project from '../components/Project';
import techBlogImage from '../assets/tech-blog-screenshot.png';
import noteTakerImage from '../assets/note-taker-express-screenshot.png';
import textEditorPwa from '../assets/text-editor-pwa.png';
import weatherDashboard from '../assets/server-side-api-weather-dashboard.png';
import passwordGenerator from '../assets/password-generator-javier.png';
import socialNetwork from '../assets/social-network-nosql.png';

export default function Portfolio() {
  return (
    <div className='container'>
      <div className='row justify-content-center mb-3'>
        <div className='col-12 col-md-6 col-lg-4'>
        <Project
          title="Tech Blog Model View Controller"
          imageSrc={techBlogImage}
          imageAtl="Screenshot of the Tech Blog App project"
          projectLink="https://tech-block-mvc-3dbf225d4a8e.herokuapp.com/"
          repoLink="https://github.com/elchinatalpf/Tech-Blog-Model-View-Controller"
        >
          My first Fullstack Application. Tech Blog.
        </Project>
        </div>

        <div className='col-12  col-md-6 col-lg-4'>
        <Project
          title="Note Taker Express JS"
          imageSrc={noteTakerImage}
          imageAtl="Screenshot of the Note Taker Express Project"
          projectLink="https://note-tracker-jmorales-bb91efd2b7dc.herokuapp.com/"
          repoLink="https://github.com/elchinatalpf/Note-Taker-Express.js"
          >
          Note Taker Express.
        </Project>
          </div>

          <div className='col-12 col-sm-12 col-md-6'>
        <Project
          title="Text Editor PWA Write"
          imageSrc={textEditorPwa}
          imageAtl="Screenshot of Text Editor PWA project"
          projectLink="https://text-editor-pwa-write-dbbcce847208.herokuapp.com/"
          repoLink="https://github.com/elchinatalpf/textEditorPWA-Write-Stuff"
          >
          Text Editor PWA Write.
        </Project>
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
        <Project
          title="Server Side API's Weather Dashboard"
          imageSrc={weatherDashboard}
          imageAtl="Screenshot of Weather Dashboard project"
          projectLink="https://elchinatalpf.github.io/Server-Side-APIs-Weather-Dashboard/"
          repoLink="https://github.com/elchinatalpf/Server-Side-APIs-Weather-Dashboard"
          >
          Text Editor PWA Write.
        </Project>
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
        <Project
          title="Password Generator"
          imageSrc={passwordGenerator}
          imageAtl="Screenshot of the Password Generator Project"
          projectLink="https://elchinatalpf.github.io/password-generator-starter-code/"
          repoLink="https://github.com/elchinatalpf/password-generator-starter-code"
          >
          Password Generator.
        </Project>
          </div>
          
          <div className='col-12 col-md-6 col-lg-4'>
        <Project
          title="Social Network API NoSQL"
          imageSrc={socialNetwork}
          imageAtl="Screenshot of the Password Generator Project"
          projectLink="https://drive.google.com/file/d/1enUxjU8B5Euk1A4pvSUaBHcwxTwo7Mj-/view?pli=1"
          repoLink="https://github.com/elchinatalpf/social-network-api-NoSQL"
          >
          Video Walkthrough of the Social Network API NoSQL project.
        </Project>
          </div>

      </div>
    </div>
  );
}