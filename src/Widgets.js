import React from 'react'
import "./Widgets.css";

function Widgets() {
  return (
    <div className='widgets'>
        <iframe 
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F101810429305908%2Fphotos%2Fa.101810472639237%2F105084332311851%2F%3Ftype%3D3&show_text=true&width=500" 
        width="340" 
        height="100%" 
        style={{border:'none', overflow:'hidden'}} 
        scrolling="no" 
        frameborder="0" 
        allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>
    </div>
  )
}

export default Widgets;