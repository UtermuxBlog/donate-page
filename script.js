jQuery(document).ready(function() {
	var QRBox	=	$('#QRBox');
	var MainBox	=	$('#MainBox');
	var AliPayQR	=	'https://alpha-q3.sourcegcdn.com/2022/07/13/X1CqBIFB.png';
	var qqQR        =       'https://alpha-q3.sourcegcdn.com/2022/07/13/9z24jLEi.jpg'

	

	function showQR(QR) {
		if (QR) {
			MainBox.css('background-image','url('+QR+')');
		}
		$('#DonateText,#donateBox,#github').addClass('blur');
		QRBox.fadeIn(300,function(argument) {
			MainBox.addClass('showQR');
		});
	}

	$('#donateBox>li').click(function(event) {
		var thisID	=	$(this).attr('id');
		if (thisID === 'AliPay') {
			showQR(AliPayQR);
		} else if (thisID === 'qq') {
			showQR(qqQR);
		}
	});

	MainBox.click(function(event) {
		MainBox.removeClass('showQR').addClass('hideQR');
		setTimeout (function(a) {
			QRBox.fadeOut(300,function(argument) {
				MainBox.removeClass('hideQR');
			});
			$('#DonateText,#donateBox,#github').removeClass('blur');
		},600);

	});
});
