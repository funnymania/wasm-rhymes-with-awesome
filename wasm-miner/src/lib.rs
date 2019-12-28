mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(audience: &str) {
    alert(&format!("Hello, {}", audience));
}

// TODO: SHA256 here
#[wasm_bindgen]
pub fn rollManySidedDice() {
    let mut counter = 0;

    counter
}