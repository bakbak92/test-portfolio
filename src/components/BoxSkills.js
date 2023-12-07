import React from 'react';
import html from './../assets/image/html_original_wordmark_logo_icon_146478.png';
import css from './../assets/image/css_original_wordmark_logo_icon_146576.png';
import js from './../assets/image/javascript_icon_130900.png';
import sass from './../assets/image/file_type_sass_icon_130182.png';
import bootstrap from './../assets/image/bootstrap_plain_logo_icon_146619.png';
import react from './../assets/image/react_original_wordmark_logo_icon_146375.png';
import redux from './../assets/image/redux_original_logo_icon_146365.png';
import github from './../assets/image/Github_icon-icons.com_66788.png';
import figma from './../assets/image/figma_logo_icon_170157.png';
import gimp from './../assets/image/gimp_icon_161279.png';
import blender from './../assets/image/Blender_23505.png';
import lmms from './../assets/image/lmms_103092.png';

const BoxSkills = () => {
  return (
    <main className='skill-box'>
      <div className="box-title-skill">
        <h1 className="title-skill">Compétences</h1>
      </div>
        <div className="logo-skill">
          <h2 className="title-logo">Langages</h2>
            <div className="box-cards">
              <div className="card-skill">
                <img src={html} alt="logo html5" className='img-skill' />
                <p className="text-logo">HTML 5</p>
                <div className="progress-bar">
                  <div id='html' className="full-bar">90%</div>
                </div>
              </div>
              <div className="card-skill">
                <img src={css} alt="logo css3" className='img-skill' />
                <p className="text-logo">CSS 3</p>
                <div className="progress-bar">
                  <div id='css' className="full-bar">90%</div>
                </div>
              </div>
              <div className="card-skill">
                <img src={js} alt="logo JavaScript" className='img-skill' />
                <p className="text-logo">JavaScript</p>
                <div className="progress-bar">
                  <div id='js' className="full-bar">70%</div>
                </div>
              </div>
            </div>
            <h2 className="title-logo">frameWork / Librairie</h2>
              <div className="box-cards">
                <div className="card-skill">
                  <img src={bootstrap} alt="logo bootstrap" className='img-skill' />
                    <p className="text-logo">BootStrap</p>
                    <div className="progress-bar">
                      <div id='bootstrap' className="full-bar">70%</div>
                    </div>
                </div>
                <div className="card-skill">
                  <img src={react} alt="logo react" className='img-skill' />
                  <p className="text-logo">ReactJs</p>
                  <div className="progress-bar">
                    <div id='react' className="full-bar">60%</div>
                  </div>
                </div>
              </div>
              <h2 className="title-logo">Outils de langage</h2>
                <div className="box-cards">
                  <div className="card-skill">
                    <img src={css} alt="logo css3 flexbox" className='img-skill' />
                    <p className="text-logo">FlexBox</p>
                    <div className="progress-bar">
                      <div id='flex' className="full-bar">95%</div>
                    </div>
                  </div>
                  <div className="card-skill">
                    <img src={css} alt="logo css3 Grid" className='img-skill' />
                    <p className="text-logo">Grid</p>
                    <div className="progress-bar">
                      <div id='grid' className="full-bar">80%</div>
                    </div>
                  </div>
                  <div className="card-skill">
                    <img src={sass} alt="logo sass" className='img-skill' />
                    <p className="text-logo">Sass</p>
                    <div className="progress-bar">
                      <div id='sass' className="full-bar">75%</div>
                    </div>
                  </div>
                  <div className="card-skill">
                    <img src={react} alt="logo sass" className='img-skill' />
                    <p className="text-logo">ReactDevTool</p>
                    <div className="progress-bar">
                      <div id='react-dev-tool' className="full-bar">60%</div>
                    </div>
                  </div>
                  <div className="card-skill">
                    <img src={redux} alt="logo sass" className='img-skill' />
                    <p className="text-logo">Redux/ToolKit</p>
                    <div className="progress-bar">
                      <div id='redux' className="full-bar">50%</div>
                    </div>
                  </div>
                </div>
              <h2 className="title-logo">logiciels</h2>
                <div className="box-cards">
                  <div className="card-skill">
                    <img src={github} alt="logo bootstrap" className='img-skill' />
                    <p className="text-logo">GitHub</p>
                    <div className="progress-bar">
                      <div id='github' className="full-bar">80%</div>
                    </div>
                  </div>
                  <div className="card-skill">
                    <img src={figma} alt="logo react" className='img-skill' />
                    <p className="text-logo">Figma</p>
                    <div className="progress-bar">
                      <div id='figma' className="full-bar">65%</div>
                    </div>
                  </div>
                  <div className="card-skill">
                    <img src={gimp} alt="logo react" className='img-skill' />
                    <p className="text-logo">GIMP</p>
                    <div className="progress-bar">
                      <div id='gimp' className="full-bar">60%</div>
                    </div>
                  </div>
                  <div className="card-skill">
                    <img src={blender} alt="logo react" className='img-skill' />
                    <p className="text-logo">Blender3D</p>
                    <div className="progress-bar">
                      <div id='blender' className="full-bar">70%</div>
                    </div>
                  </div>
                  <div className="card-skill">
                    <img src={lmms} alt="logo react" className='img-skill' />
                    <p className="text-logo">LMMS</p>
                    <div className="progress-bar">
                      <div id='lmms' className="full-bar">90%</div>
                    </div>
                  </div>
                </div>
      </div>
    </main>
    
  );
};

export default BoxSkills;