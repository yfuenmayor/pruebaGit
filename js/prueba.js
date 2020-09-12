// https://sweetalert2.github.io/#configuration
// SWEETALERT2
const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });


$('#btn3').click(function(event) {
	Toast.fire({
	  type: 'success',
	  title: 'Cargado',
	  customClass: {
	  popup: 'bg-success',
	  title: 'text-light',
	  icon: 'text-light',
	}
	})
});

$('#btn2').click(function(event) {
	Toast.fire({
	  type: 'question',
	  title: 'Quiere salir',
	})
});

$('#btn4').click(function(event) {
	Toast.fire({
	  type: 'error',
	  title: 'Error 505',
	})
});

$('#btn5').click(function(event) {
	Toast.fire({
	  type: 'warning',
	  title: 'Cuidado',
	})
});

$('#btn1').click(function(event) {
	Toast.fire({
	  type: 'info',
	  title: 'Bienvenido Usuario',
	})
});


// TOASTR
// https://codeseven.github.io/toastr/demo.html

$('#btn8').click(function(event) {
toastr.success('Accion ejecutada con exito!')
});

$('#btn6').click(function(event) {
toastr.info('Texto informativo sobre alguna acción.')
});

$('#btn9').click(function(event) {
toastr.error('Error 404')
});

$('#btn10').click(function(event) {
toastr.warning('Cambios realizados que perjudican su estado.')
});