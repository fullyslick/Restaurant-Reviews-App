self.addEventListener('fetch', function(event) {
  event.respondWith(
   new Response('<div>Hello World</div>', {
     headers: { "Content-Type" : "text/html; charset=utf-8"}
   })
 );
});
