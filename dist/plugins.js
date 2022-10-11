$(".gridder-grid").gridderExpander({
    scroll: !0,
    scrollOffset: 30,
    scrollTo: "panel",
    animationSpeed: 400,
    animationEasing: "easeInOutExpo",
    showNav: !0,
    nextText: "",
    prevText: "",
    closeText: "",
    onStart: function () {
        console.log("On Gridder Initialized...")
    },
    onContent: function () {
        console.log("On Gridder Expand...")
    },
    onClosed: function () {
        console.log("On Gridder Closed...")
    }
})