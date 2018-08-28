import * as React from 'react'
import {connect} from 'react-redux'
import {fetchAllPosts} from '../actions'
import Post from '../components/Post'

export class News extends React.Component{
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.fetchAllPosts()
  }

  render(){
    const {posts} = this.props

    return (
      <section>
        <div className="container">
          {posts && posts.map((post, key) => {
            return (
              <Post key={key} {...post}/>
            )
          })}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.props
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: () => {
      dispatch(fetchAllPosts())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)


//TO DELETE
const postss = [
  {
    id: 0,
    dateSend: '2018-08-21 22:55',
    authorId: 0,
    songsId: [
      0
    ]
  },
  {
    id: 1,
    dateSend: '2018-08-21 20:21',
    authorId: 0,
    songsId: [
      1
    ]
  },
  {
    id: 2,
    dateSend: '2018-08-19 21:34',
    authorId: 1,
    songsId: [
      2
    ]
  },
]
