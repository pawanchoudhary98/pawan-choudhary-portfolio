
        var pre = document.getElementById("loading");

        function preload() {
            pre.style.display = "none";
        }

        $('.skill-per').each(function() {
            var $this = $(this);
            var per = $this.attr('per');
            $this.css("width", per + '%');
            $({
                animatedValue: 0
            }).animate({
                animatedValue: per
            }, {
                duration: 1000,
                step: function() {
                    $this.attr('per', Math.floor(this.animatedValue) + '%');
                },
                complete: function() {
                    $this.attr('per', Math.floor(this.animatedValue) + '%');
                }
            });
        });
    
    

        var typed = new Typed('.typing', {
            strings: ["student.", "developer.", "designer."],
            loop: true,
            typeSpeed: 100,
            backspeed: 1000,
            backdelay: 1000
        });
   



    
    
        AOS.init({
            offset: 100,
            duration: 2000

        });
   
