<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "Flickity",
  props: {
    options: Object,
  },
  data() {
    const Flickity = require("flickity");
    require("flickity-imagesloaded");
    return { data: Flickity.data(this.$el) };
  },
  mounted() {
    console.log(this.Flickity);
    this.init();
  },
  unmounted() {
    this.$flickity.destroy();
    this.$flickity = null;
  },
  methods: {
    /**
     * Initialize a new flickity and emit init event.
     */
    init() {
      const Flickity = require("flickity");
      require("flickity-imagesloaded");
      this.$flickity = new Flickity(this.$el, this.options);
      this.$emit("init", this.$flickity);
    },
    /**
     * Return the current flickity instance to access directly
     *
     * @return {Flickity}
     */
    flickity() {
      return this.$flickity;
    },
    /**
     * Selecting Slides
     */
    /**
     * Select a slide
     *
     * @param {number} index
     * @param {boolean} isWrapped
     * @param {boolean} isInstant
     */
    select(index, isWrapped, isInstant) {
      this.$flickity.select(index, isWrapped, isInstant);
    },
    /**
     * Change to the next slide
     *
     * @param {boolean} isWrapped
     * @param {boolean} isInstant
     */
    next(isWrapped, isInstant) {
      this.$flickity.next(isWrapped, isInstant);
    },
    /**
     * Change to the previous slide
     *
     * @param {boolean} isWrapped
     * @param {boolean} isInstant
     */
    previous(isWrapped, isInstant) {
      this.$flickity.previous(isWrapped, isInstant);
    },
    /**
     * Select a cell
     *
     * @param {number} value
     * @param {boolean} isWrapped
     * @param {boolean} isInstant
     */
    selectCell(value, isWrapped, isInstant) {
      this.$flickity.selectCell(value, isWrapped, isInstant);
    },
    /**
     * Sizing and Positioning
     */
    /**
     * Trigger a resize event
     */
    resize() {
      this.$flickity.resize();
    },
    /**
     * Trigger a reposition event
     */
    reposition() {
      this.$flickity.reposition();
    },
    /**
     * Adding and removing cells
     */
    /**
     * Prepend elements to flickity
     *
     * @param {array|HTMLElement|NodeList} elements
     */
    prepend(elements) {
      this.$flickity.prepend(elements);
    },
    /**
     * Append elements to flickity
     *
     * @param {array|HTMLElement|NodeList} elements
     */
    append(elements) {
      this.$flickity.append(elements);
    },
    /**
     * Insert elements at a given index
     *
     * @param {array|HTMLElement|NodeList} elements
     * @param {number} index
     */
    insert(elements, index) {
      this.$flickity.insert(elements, index);
    },
    /**
     * Remove elements from flickity
     *
     * @param {array|HTMLElement|NodeList} elements
     */
    remove(elements) {
      this.$flickity.remove(elements);
    },
    /**
     * Player
     */
    /**
     * Trigger a playPlayer event
     */
    playPlayer() {
      this.$flickity.playPlayer();
    },
    /**
     * Trigger a stopPlayer event
     */
    stopPlayer() {
      this.$flickity.stopPlayer();
    },
    /**
     * Trigger a pausePlayer event
     */
    pausePlayer() {
      this.$flickity.pausePlayer();
    },
    /**
     * Trigger a unpausePlayer event
     */
    unpausePlayer() {
      this.$flickity.unpausePlayer();
    },
    /**
     * Trigger a rerender event
     */
    rerender() {
      this.$flickity.destroy();
      this.init();
    },
    /**
     * Utilities
     */
    /**
     * Destroy the flickity instance
     */
    destroy() {
      this.$flickity.destroy();
    },
    /**
     * Trigger a rerender event
     */
    reloadCells() {
      this.$flickity.reloadCells();
    },
    /**
     * Get the cell elements
     *
     * @return {array}
     */
    getCellElements() {
      return this.$flickity.getCellElements();
    },
    /**
     * Events
     */
    /**
     * Attach an event
     *
     * @param {string} eventName
     * @param {function} listener
     */
    on(eventName, listener) {
      this.$flickity.on(eventName, listener);
    },
    /**
     * Remove an event
     *
     * @param {string} eventName
     * @param {function} listener
     */
    off(eventName, listener) {
      this.$flickity.off(eventName, listener);
    },
    /**
     * Attach an event once
     *
     * @param {string} eventName
     * @param {function} listener
     */
    once(eventName, listener) {
      this.$flickity.once(eventName, listener);
    },
    /**
     * Properties
     */
    /**
     * Return the selected element
     *
     * @return {HTMLElement}
     */
    selectedElement() {
      return this.$flickity.selectedElement;
    },
    /**
     * Return the selected elements
     *
     * @return {array}
     */
    selectedElements() {
      return this.$flickity.selectedElements;
    },
    /**
     * Return the selected index
     *
     * @return {number}
     */
    selectedIndex() {
      return this.$flickity.selectedIndex;
    },
    /**
     * Return the cells
     *
     * @return {array}
     */
    cells() {
      return this.$flickity.cells;
    },
    /**
     * Return the slides
     *
     * @return {array}
     */
    slides() {
      return this.$flickity.slides;
    },
    /**
     * Disable dragging of slider
     */
    disableDrag() {
      this.$flickity.options.draggable = false;
      this.$flickity.updateDraggable();
    },
    /**
     * Enable dragging of slider
     */
    enableDrag() {
      this.$flickity.options.draggable = true;
      this.$flickity.updateDraggable();
    },
  },
};
</script>

<style>
.flickity-enabled {
  position: relative;
}
.flickity-enabled:focus {
  outline: 0;
}
.flickity-viewport {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.flickity-slider {
  position: absolute;
  width: 100%;
  height: 100%;
}
.flickity-enabled.is-draggable {
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.flickity-enabled.is-draggable .flickity-viewport {
  cursor: move;
  cursor: -webkit-grab;
  cursor: grab;
}
.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}
.flickity-button {
  position: absolute;
  background: hsla(0, 0%, 100%, 0.75);
  border: none;
  color: #333;
}
.flickity-button:hover {
  background: #fff;
  cursor: pointer;
}
.flickity-button:focus {
  outline: 0;
  box-shadow: 0 0 0 5px #19f;
}
.flickity-button:active {
  opacity: 0.6;
}
.flickity-button:disabled {
  opacity: 0.3;
  cursor: auto;
  pointer-events: none;
}
.flickity-button-icon {
  fill: currentColor;
}
.flickity-prev-next-button {
  top: 50%;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  transform: translateY(-50%);
}
.flickity-prev-next-button.previous {
  left: 10px;
}
.flickity-prev-next-button.next {
  right: 10px;
}
.flickity-rtl .flickity-prev-next-button.previous {
  left: auto;
  right: 10px;
}
.flickity-rtl .flickity-prev-next-button.next {
  right: auto;
  left: 10px;
}
.flickity-prev-next-button .flickity-button-icon {
  position: absolute;
  left: 20%;
  top: 20%;
  width: 60%;
  height: 60%;
}
.flickity-page-dots {
  position: absolute;
  width: 100%;
  bottom: -25px;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  line-height: 1;
}
.flickity-rtl .flickity-page-dots {
  direction: rtl;
}
.flickity-page-dots .dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 8px;
  background: #333;
  border-radius: 50%;
  opacity: 0.25;
  cursor: pointer;
}
.flickity-page-dots .dot.is-selected {
  opacity: 1;
}
</style>
