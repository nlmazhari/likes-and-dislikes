class IntroCard extends React.Component {
  state = {
    initial_likes: 100,
    initial_dislikes: 25,
    likes_number: 0,
    dislikes_number: 0,
    hit_like: false,
    hit_dislike: false
  }
  componentDidMount() { 
    this.setState({ likes_number: this.state.initial_likes })
    this.setState({ dislikes_number: this.state.initial_dislikes})
  }
  like = () => {
    let { hit_like , hit_dislike , likes_number, dislikes_number } =  this.state
    if (hit_dislike && !hit_like) {
      this.setState({ dislikes_number: dislikes_number - 1 })
      document.getElementById('dislike-button').classList.remove('disliked')      
      this.setState({ hit_dislike: !(hit_dislike) })
    }
    if (hit_like) {
      this.setState({ likes_number: likes_number - 1 })
      document.getElementById('like-button').classList.remove('liked')        
    }
    else {
      this.setState({ likes_number: likes_number + 1 })
      document.getElementById('like-button').classList.add('liked')             
    }
    this.setState({hit_like: !(hit_like)})       
  }
  dislike = () => {
      let { hit_like , hit_dislike , likes_number, dislikes_number } =  this.state
      if (hit_like && !hit_dislike) {
        this.setState({ likes_number: likes_number - 1 }) 
        document.getElementById('like-button').classList.remove('liked')                          
        this.setState({ hit_like: !(this.state.hit_like) })       
      }
      if (hit_dislike) {
        this.setState({ dislikes_number: dislikes_number - 1 }) 
        document.getElementById('dislike-button').classList.remove('disliked')
      }
      else {
        this.setState({ dislikes_number : dislikes_number + 1 }) 
        document.getElementById('dislike-button').classList.add('disliked') 
      }
      this.setState({ hit_dislike: !(hit_dislike) })  
    }
  render() {
    const {likes_number, dislikes_number} = this.state
    return (<div className="card">
        <h2>Like/Dislike</h2>
        <button 
          id="like-button"
          className="like-button" 
          onClick={() => this.like()}>
          Likes | <span className="likes-counter">{likes_number}</span>
        </button>                                                        
        <button 
          id="dislike-button"
          className="dislike-button" 
          onClick={() => this.dislike()}>
          Dislikes | <span className="dislikes-counter">{dislikes_number}</span>
        </button> 
    </div>)
  }

};

export default IntroCard;