'use strict';
// helpers
let __ = (id) => document.getElementById(id);

// disable drag and drop on window
window.addEventListener('dragover', (e) => { e.preventDefault();});
window.addEventListener('drop', (e) => { e.preventDefault();});

// set place holder and preview
let setPlaceholderAndPreview = (files) => {
    // check if image
    let allowed = ['png', 'jpg', 'jpeg', 'gif'];

    let ext = files[0].name.split('.');
        ext = ext[ext.length - 1];

        // if not allowed
        if(allowed.indexOf(ext) == '-1')
        {
            __('file-info').style.display    = 'none';
            __('preview-icon').style.display = 'none';
            __('file-error').style.display   = 'block';
            __('file-error').lastElementChild.innerHTML = "File type not allowed <br> only " + allowed.join(',') + " are allowed";

            return false;
        }

     // set files
    __('file').files                 = files;

    // display file info
    __('file-info').style.display  = 'block';
    __('file-error').style.display = 'none';
    // set place holder
    __('file-placeholder').innerHTML = files[0].name;
    // display preview icon
    __('preview-icon').style.display = 'block';
    // add image to preview
    let imageUrl = URL.createObjectURL(files[0]);
    __('preview-box').firstElementChild.src = imageUrl;
};

// on drop
__('upload-area').addEventListener('drop', (e) =>{
    setPlaceholderAndPreview(e.dataTransfer.files);
});

// on click
__('file').addEventListener('change', (e) => {
    setPlaceholderAndPreview(e.target.files);
});