import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import FuseNavbar from './components/fuse-navbar/FuseNavbar'
import Product from './containers/Product'
import { NotFound } from './containers/errors/NotFound'


export default function App (){
  const [writers, setWriters] = useState([]);
	const [testAPI, setTestAPI] = useState({name:null});
  //Fecth data from server
  async function fetchData(){
    await axios.get('http://localhost:3001/writers?_embed=texts')
      .then(res=>{
        const writersData = res.data
        setWriters(writersData);
    })
  }
	async function fetchDataAPI(){
		await axios.get('http://localhost:8080/auth/getProducts')
			.then(res=>{
				console.log(res)
				const testAPI = res.data
				setTestAPI(testAPI);
			})
	}
  //componentDidMount
  useEffect(() => {
	fetchDataAPI();
    setWriters([
      {
        "id": "ralph-waldo-emerson",
        "name": "Ralph Waldo Emerson",
        "born": "May 25, 1803",
        "deceased": "April 27, 1882",
        "description": "American essayist, lecturer, philosopher and poet who led the transcendentalist movement of the mid-19th century. He was seen as a champion of individualism and a prescient critic of the countervailing pressures of society, and he disseminated his thoughts through dozens of published essays and more than 1,500 public lectures across the United States.",
        "image": "https://media1.shmoop.com/media/images/large/emerson.jpeg"
      },
      {
        "id": "friedrich-nietzsche",
        "name": "Friedrich Nietzsche",
        "born": "October 15, 1844",
        "deceased": "August 25, 1900",
        "description": "German philosopher, cultural critic, composer, poet, philologist, and Latin and Greek scholar. His thought enjoyed renewed popularity in the 1960s, and his ideas have since had a profound impact on 20th and early-21st century thinkers across philosophy—especially in schools of continental philosophy such as existentialism, postmodernism and post-structuralism—as well as art, literature, psychology, politics, and popular culture.",
        "image": "https://images-na.ssl-images-amazon.com/images/I/51RsIVm3G7L.jpg"
      },
      {
        "id": "carl-jung",
        "name": "Carl Jung",
        "born": "July 26, 1875",
        "deceased": "June 6, 1961",
        "description": "Swiss psychiatrist and psychoanalyst who founded analytical psychology. His work has been influential not only in psychiatry but also in anthropology, archaeology, literature, philosophy, and religious studies. He created some of the best known psychological concepts, including synchronicity, archetypal phenomena, the collective unconscious, the psychological complex, and extraversion and introversion.",
        "image": "http://3.bp.blogspot.com/-CKeCID-ZoqQ/UcA_qek-WpI/AAAAAAAADNo/iwP6cTOVJvY/s1600/Carl-Gustav-Jung.jpg"
      },
      {
        "id": "joseph-campbell",
        "name": "Joseph Campbell",
        "born": "March 26, 1904",
        "deceased": "October 30, 1987",
        "description": "American mythologist who worked in comparative mythology and comparative religion. His work covers many aspects of the human experience. Since the book's publication, Campbell's theory has been consciously applied by a wide variety of modern writers and artists. His philosophy has been summarized by his own often repeated phrase: \"Follow your bliss.\"",
        "image": "https://anewdoxology.files.wordpress.com/2017/08/joseph-campbell.jpg?w=300"
      },
      {
        "id": "osho",
        "name": "Rajneesh (Osho)",
        "born": "December 11, 1931",
        "deceased": "January 19, 1990",
        "description": "Indian spiritual guru, considered as a Godman and leader of the Rajneesh movement. During his lifetime he was viewed as a controversial mystic, guru, and spiritual teacher. He advocated a more open attitude towards human sexuality, earning him the nickname \"sex guru\" in the Indian and later international press, although this attitude became more acceptable with time.",
        "image": "https://starsunfolded.com/wp-content/uploads/2018/01/Osho-Poona2-1-compressed-2.jpg"
      }
    ]);
    //fetchData();
  }, [])

  //componentDidUpdate
  useEffect(() => {
    //console.log(writers)
  }, [writers])
  return <BrowserRouter>
  <FuseNavbar writers={writers}>
    <Switch>
      <Route exact path="/" render={() => <div>name:{testAPI.name}</div>} />
      <Route exact path="/products" render={() => <Product/>} />
      <Route component={NotFound} />
    </Switch>
  </FuseNavbar>
  </BrowserRouter>
}/*
class App extends Component {
  state = {
    writers: []
  }

  async componentDidMount() {
    const writers = await (await fetch('http://localhost:3001/writers?_embed=texts')).json()

    this.setState({ writers })
    console.log("sucess \n" + this.state);
  }

  render() {
    const { writers } = this.state
    
    return <BrowserRouter>
    <FuseNavbar writers={writers}>
    <Switch>

      <Route component={NotFound}/>
    </Switch>
    </FuseNavbar>
  </BrowserRouter>
  }
}*/
/*
      <Router>
        <div writers={writers}>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/authorization' exact={true} component={Authorization} />
          <Route component={NotFound}/>
        </Switch>
        </div>
      </Router>
<Route path='/writers' render={
  props => <Writers {...props} writers={writers}/>
}/>*/