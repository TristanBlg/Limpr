import * as React from 'react'

function Profile(props){
  const {id} = props.match.params

  return (
    <section>
      <div className="container">
        {id ? `${id}'s` : 'Your'} profile
      </div>
    </section>
  )
}

export default Profile
