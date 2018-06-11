$('body').prepend('<a id="delete-btn-c"><i class="iconfont">&#xe673;</i></a>')
$('#delete-btn-c').click(() => {
  let $modules = $('.photo_module');
  let len = $modules.length;
  if (len < 30) {
    toastr.warning('Photos are too few(less than 30), do not need to remove.');
    return;
  }
  for (let i = 0; i < len - 20; i++) {
    $modules[i].remove();
  }
  toastr.info('Successfully removed ' + (len - 20) + ' photos');
});
