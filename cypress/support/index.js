import './commands'
require('cypress-plugin-retries')
import addContext from 'mochawesome/addContext';

const titleToFileName = (title) => title.replace(/[:\/]/g, '');

Cypress.on('test:after:run', (test, runnable) => {

   if (test.state === 'failed') {
      const filename = `${titleToFileName(runnable.parent.title)} -- ${titleToFileName(test.title)} (failed).png`;
      addContext({ test }, `../screenshots/${Cypress.spec.name}/${filename}`);
      //addContext({ test }, `../videos/${Cypress.spec.name}.mp4`);

      let videoName = Cypress.spec.name
      videoName = videoName.replace('/.js.*', '.js')
      const videoUrl = 'videos/' + videoName + '.mp4'
      addContext({ test }, videoUrl)
   } else if (test.state === 'pass'){

      addContext({ test }, `../videos/${Cypress.spec.name}.mp4`);
      // let videoName = Cypress.spec.name
      // videoName = videoName.replace('/.js.*', '.js')
      // const videoUrl = 'videos/' + videoName + '.mp4'
      // addContext({ test }, videoUrl)
   }
});




