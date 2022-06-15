// Event pada saat link di klik
$('.page-scroll').on('click', function(e) {
	

	//ambil isi Tujuan
	const tujuan = $(this).attr('href');
	// tangkap element yang bersangkutan
	const elementTujuan = $(tujuan);



	$('html , body').animate({
		scrollTop: elementTujuan.offset().top
	}, 1000);


	e.preventDefault();
})

