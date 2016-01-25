/**
 * Created by liuzheng on 1/25/16.
 */
$(document).ready(function () {
    var pattern = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        cell_size: 90,
        variance: 1,
        stroke_width: 1,
        x_colors: 'random',
        y_colors: 'random'
    });
    $('.background').append(pattern.canvas());
    $('#dock').Fisheye(
        {
            maxWidth: 60,
            items: 'a',
            itemsText: 'span',
            container: '.dock-container',
            itemWidth: 40,
            proximity: 80,
            alignment: 'left',
            valign: 'bottom',
            halign: 'center'
        }
    );

    MathJax.Hub.Config({
	tex2jax: { inlineMath: [['$','$'], ['\\(','\\)']] }
    });

});