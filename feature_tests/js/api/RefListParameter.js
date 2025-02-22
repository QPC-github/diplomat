import wasm from "./diplomat-wasm.mjs"
import * as diplomatRuntime from "./diplomat-runtime.js"

const RefListParameter_box_destroy_registry = new FinalizationRegistry(underlying => {
  wasm.RefListParameter_destroy(underlying);
});

export class RefListParameter {
  #lifetimeEdges = [];
  constructor(underlying, owned, edges) {
    this.underlying = underlying;
    this.#lifetimeEdges.push(...edges);
    if (owned) {
      RefListParameter_box_destroy_registry.register(this, underlying);
    }
  }
}
