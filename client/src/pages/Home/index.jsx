 
function Home(userDetails) {
	const user = userDetails.user;
	const logout = () => {
		window.open(`http://localhost:8080/auth/logout`, "_self");
	};
	return (
  				 
  				<>	<img
						src={user.picture}
						alt="profile"
 					/>
					<h1>{user.name}</h1>
					<h1>{user.email}</h1>

					 
					<button  onClick={logout}>
						Log Out
					</button>
					</>
  	);
}

export default Home;
