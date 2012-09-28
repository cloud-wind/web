// JavaScript Document
jQuery(function() {

	jQuery('#allinone_carousel_sweet').allinone_carousel({
		skin: 'sweet',
		width: 990,
		height: 454,
		autoPlay: 4,
		resizeImages:true,
		autoHideBottomNav:false,
		//easing:'easeOutBounce',
		numberOfVisibleItems:5,
		elementsHorizontalSpacing:110,
		elementsVerticalSpacing:20,
		verticalAdjustment:0,
		animationTime:0.5,
		circleLeftPositionCorrection:50,
		circleTopPositionCorrection:20,
		nextPrevMarginTop:25,
		playMovieMarginTop:-15,
		bottomNavMarginBottom:-25
	});		
	
	
});