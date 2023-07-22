

// use to upload image in hosting website
const uploadImage = async image => {
  const formData = new FormData()
  formData.append('image', image)
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMAGE_SECRET
  }`
  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  })
  const data = await response.json()
  return data;
}

export default uploadImage;