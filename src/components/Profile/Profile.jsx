function Profile(props){
      console.log(props.name);
      return(
            <main className="profile">
                  <h2>
                        {props.name}
                  </h2>
                  <p><span>{props.status}</span></p>
                  <div className="post">
                        <h3>Posts</h3>
                        <textarea></textarea>
                        <button>Add Post</button>
                  </div>
            </main>
      )
}

export default Profile;