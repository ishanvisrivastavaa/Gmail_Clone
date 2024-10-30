const fetchInstagramPosts = async (doctorId) => {
  const doctorData = await getDoctorData(doctorId);

  if (isTokenValid(doctorData.token_expiration)) {
    const accessToken = doctorData.instagram_access_token;
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${accessToken}`
    );
    const posts = await response.json();
    return posts.data; 
  } else {
   
    throw new Error("Access token expired. Please re-authenticate.");
  }
};
