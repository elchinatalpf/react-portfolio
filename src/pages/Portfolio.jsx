import Project from '../components/Project';
import techBlogImage from '../assets/tech-blog-screenshot.png';
import noteTakerImage from '../assets/note-taker-express-screenshot.png';
import textEditorPwa from '../assets/text-editor-pwa.png';
import weatherDashboard from '../assets/server-side-api-weather-dashboard.png';

export default function Portfolio() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 col-lg-4'>
        <Project
          title="Tech Blog Model View Controller"
          imageSrc={techBlogImage}
          imageAtl="Screenshot of the Tech Blog App project"
          projectLink="https://tech-block-mvc-3dbf225d4a8e.herokuapp.com/"
        >
          My first Fullstack Application. Tech Blog.
        </Project>
        </div>

        <div className='col-md-6 col-lg-4'>
        <Project
          title="Note Taker Express JS"
          imageSrc={noteTakerImage}
          imageAtl="Screenshot of the Note Taker Express Project"
          projectLink="https://note-tracker-jmorales-bb91efd2b7dc.herokuapp.com/"
          >
          Note Taker Express.
        </Project>
          </div>

          <div className='col-sm-12 col-md-6'>
        <Project
          title="Text Editor PWA Write"
          imageSrc={textEditorPwa}
          imageAtl="Screenshot of Text Editor PWA project"
          projectLink="https://text-editor-pwa-write-dbbcce847208.herokuapp.com/"
          >
          Text Editor PWA Write.
        </Project>
          </div>

          <div className='col-md-6 col-lg-4'>
        <Project
          title="Server Side API's Weather Dashboard"
          imageSrc={weatherDashboard}
          imageAtl="Screenshot of Weather Dashboard project"
          projectLink="https://elchinatalpf.github.io/Server-Side-APIs-Weather-Dashboard/"
          >
          Text Editor PWA Write.
        </Project>
          </div>
      </div>
    </div>
  );
}