import { buildQueries } from "@testing-library/dom"
import React, { useState } from "react"
import { Rating, RatingView } from 'react-simple-star-rating'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/MovieCard.css'


const MovieCard = () => {

    const [movie, setMovie] = useState
        (
            [{
                
                description: 'Un acteur en galère accepte pour boucler ses fins de mois d’animer un atelier théâtre en prison. Surpris par les talents de comédien des détenus, il se met en tête de monter avec eux une pièce sur la scène d’un vrai théâtre. Commence alors une formidable aventure humaine. Inspiré d’une histoire vraie. ',
                postURL: 'https://fr.web.img4.acsta.net/pictures/21/07/07/09/57/0322072.jpg',
                title: 'un Triomphe',
                rate: 4,
            },
            {
                
                description: "L'histoire de Paul Atreides, jeune homme aussi doué que brillant, voué à connaître un destin hors du commun qui le dépasse totalement. Car s'il veut préserver l'avenir de sa famille et de son peuple, il devra se rendre sur la planète la plus dangereuse de l'univers – la seule à même de fournir la ressource la plus précieuse au monde, capable de décupler la puissance de l'humanité. Tandis que des forces maléfiques se disputent le contrôle de cette planète, seuls ceux qui parviennent à dominer leur peur pourront survivre… ",
                postURL: 'https://fr.web.img5.acsta.net/c_310_420/pictures/21/08/10/12/20/4633954.jpg',
                title: 'DUNE',
                rate: 3,
            },
            {
                
                description: "Shang-Chi va devoir affronter un passé qu’il pensait avoir laissé derrière lui lorsqu’il est pris dans la toile de la mystérieuse organisation des dix anneaux. ",
                postURL: "https://fr.web.img3.acsta.net/pictures/21/08/25/11/54/3128925.jpg",
                title: 'Shang-Chi',
                rate: 1,
            },
            {
                
                description: 'Peter Quill est un aventurier traqué par tous les chasseurs de primes pour avoir volé un mystérieux globe convoité par le puissant Ronan, dont les agissements menacent l’univers tout entier. Lorsqu’il découvre le véritable pouvoir de ce globe et la menace qui pèse sur la galaxie, il conclut une alliance fragile avec quatre aliens disparates ',
                postURL: 'https://fr.web.img5.acsta.net/pictures/14/08/04/15/09/405662.jpg',
                title: 'Les Gardiens de la Galaxie',
                rate: 4,
            },
            {
               
                description: "Lorsque Nick Fury, le directeur du S.H.I.E.L.D., l'organisation qui préserve la paix au plan mondial, cherche à former une équipe de choc pour empêcher la destruction du monde, Iron Man, Hulk, Thor, Captain America, Hawkeye et Black Widow répondent présents. Les Avengers ont beau constituer la plus fantastique des équipes,",
                postURL: 'https://media.senscritique.com/media/000005676799/source_big/Avengers.jpg',
                title: 'AVENGER',
                rate: 2,
            }]

        )
        const [rating, setRating] = useState(0) // initial rating value

        // Catch Rating value
        const handleRating = (rate) => {
          setRating(rate)
          // Some logic
        }

    const [search, setSearch] = useState('')

    const [star, setStar] = useState(0) // initial rating value

  // Catch Rating value
  const handleStar= (value) => {
    setStar(value)
    // Some logic
  }

    const filteredMovies = movie.filter(
        a => {
            return a.title.toLowerCase().includes(search.toLocaleLowerCase())
        }
    )

    const filteredStar = movie.filter(
        a => {
            return a.rate ===star
        }
    )

    const [values, setValues] = useState
        (
            {
                title: '',
                description: '',
                postURL: '',
                rate: 0

            }
        )

    const titleHandler = (e) => {
        setValues({ ...values, title: e.target.value })
    }

    const descriptionHandler = (e) => {
        setValues({ ...values, description: e.target.value })
    }
    const urlHandler = (e) => {
        setValues({ ...values, postURL: e.target.value })
    }
    const submitHandler = e=>{
        e.preventDefault()
        addMovie(values.title,values.postURL,values.description,values.rate)
    }
    
    
    const addMovie = (title,postURL,description,rate) => {
        
            const newadd = [...movie,{title,description,postURL,rate}]
            setMovie(newadd)
        
       
    }



    return (
        <>
            <div className="row d-flex justify-content-center align-items-center toto">
                <div className="col-md-6">   <Rating onClick={handleStar} ratingValue={star}/>
                    <div className="form">  <input type="text" onChange={e => setSearch(e.target.value)  } className="form-control form-input" placeholder="Search a movie..." /> <span className="left-pan"></span> </div>
                    
                </div>
                
            </div>

            <div className='container'>
                {
                    !star?
                    
                    filteredMovies.map((item,index) => {
                        
                        return (

                            <div className="movie-card" key={index}>
                                <div className="movie-header ">
                                    <img src={item.postURL} alt='poster'/>
                                    <div className='overlay'>
                                        <div className="info-section">
                                            <label>Description</label>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="movie-content">
                                    <div className="movie-content-header">
                                        <a href="#">
                                            <h3 className="movie-title">{item.title}</h3>
                                        </a>

                                    </div>
                                    <div className="movie-info">


                                        <div className="info-section">
                                            <label style={{ color: 'black' }}>Rate</label>
                                            <RatingView ratingValue={item.rate} />
                                        </div>

                                    </div>
                                </div>
                            </div>

                        )


                    }

                    ):
                    filteredStar.map((item,index) => {
                        return (

                            <div className="movie-card" key={index}>
                                <div className="movie-header ">
                                    <img src={item.postURL} alt='poster'/>
                                    <div className='overlay'>
                                        <div className="info-section">
                                            <label>Description</label>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="movie-content">
                                    <div className="movie-content-header">
                                        <a href="#">
                                            <h3 className="movie-title">{item.title}</h3>
                                        </a>

                                    </div>
                                    <div className="movie-info">


                                        <div className="info-section">
                                            <label style={{ color: 'black' }}>Rate</label>
                                            <RatingView ratingValue={item.rate} />
                                        </div>

                                    </div>
                                </div>
                            </div>

                        )


                    }

                    )
    
                }
            </div>
            <div className="containe">] <div className=" text-center mt-5 ">
                <h1 style={{color:'white'}}>ADD MOVIE</h1>
            </div>
                <div className="row ">
                    <div className="col-lg-7 mx-auto">
                        <div className="card mt-2 mx-auto p-4 bg-light">
                            <div className="card-body bg-light">
                                <div className="containe">
                                    <form role="form" onSubmit={submitHandler}>
                                        <div className="controls">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group"> <label htmlFor="form_name">
                                                        Title *
                                                    </label>
                                                        <input value={values.title} onChange={titleHandler}
                                                            type="text" className="form-control"
                                                            placeholder="Please enter your title *" required="required"
                                                            data-error="Title is required." />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_lastname">PostURL *</label>
                                                        <input value={values.postURL} onChange={urlHandler}
                                                            type="text"
                                                            className="form-control" placeholder="Please enter your url *"
                                                            required="required" data-error="url is required." />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="form_message">Description *</label>
                                                        <textarea value={values.description} onChange={descriptionHandler}
                                                            className="form-control" placeholder="Write your description here."
                                                            rows="4" required="required"
                                                            data-error="Please, leave us a description.">
                                                        </textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <input type="submit" className="btn btn-success btn-send pt-2 btn-block "
                                                        value="Add movie" /> </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

MovieCard.defaultProps =
{
    postURL: '/defaulPoster.jpg',
    title: 'Default title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisc Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
}


export default MovieCard