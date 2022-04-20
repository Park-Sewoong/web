//8. Bio 객체를 import해서 컨테이너 내에 Nav 바와 Gallery 사이에 렌더링하세요.
import Gallery from './modules/gallery/Gallery.js'

import Nav from './modules/nav/Nav.js'
import Bio from './modules/bio/Bio.js'

const App = () => {
  return `
    ${Nav()}
    
    
    <div class="container">
    ${Bio()}
      
      ${Gallery()}
    </div>
  `
}


document.getElementById('root').innerHTML = App()


