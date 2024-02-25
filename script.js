// Title animation
$(".split-title").each(function () {
    let text = new SplitType(this, { types: "words" });
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: this,
            start: "bottom bottom",
        },
    });

    tl.fromTo(
        text.words,
        { y: "100%", opacity: 0 },
        {
            y: "0%",
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.inOut",
        }
    );
});

// Slide up animation
$(".anim--slide-up").each(function () {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: this,
            start: "bottom bottom",
        },
    });

    tl.from(this, {
        opacity: 0,
        y: 100,
        duration: 0.5,
        ease: "power2.inOut",
    });
});

// Pricing cards animation
let cardsTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".grid.is-pricing",
        start: "top bottom",
        end: "bottom 70%",
    },
});

cardsTl.from(".pricing-card", {
    opacity: 0,
    y: 100,
    duration: 0.5,
    stagger: 0.25,
    onComplete: () => {
        console.log("done");
    },
});

// Project animation
$(".project__information-wrap").each(function () {
    let trigger = this;
    let title = this.querySelector(".project__title h3");
    let info = this.querySelector(".paragraph");
    let link = this.querySelector(".project__link");
    let tag = $(trigger).find(".project__services-item");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: "top bottom",
            end: "bottom 70%",
        },
    });
    tl.from(title, {
        opacity: 0,
        y: 100,
        duration: 0.25,
        ease: "power2.inOut",
    })

        .from(info, {
            opacity: 0,
            y: 100,
            duration: 0.25,
            ease: "power2.inOut",
        })
        .from(link, {
            opacity: 0,
            y: 100,
            duration: 0.25,
            ease: "power2.inOut",
        })
        .from(tag, {
            opacity: 0,
            y: 100,
            duration: 0.5,
            ease: "power2.inOut",
            stagger: 0.15,
        });

    function animateTags(tags) {
        tags.each(function () {
            gsap.from(this, {
                opacity: 0,
                y: 100,
                duration: 0.5,
                ease: "power2.inOut",
            });
        });
    }
});
