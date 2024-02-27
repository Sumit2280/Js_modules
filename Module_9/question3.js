function submitBlog() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  const apiEndpoint = 'https://reqres.in/api/blogs';

  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
  })
  .then(response => response.json())
  .then(data => console.log('Blog submitted:', data))
  .catch(error => console.error('Error submitting blog:', error));
}