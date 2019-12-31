mod utils;

use std::i64;
use sha2::{Sha256, digest}
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
}:wasm_bindgen

#[wasm_bindgen]
pub fn roll_many_sided_die() {
    // Roll a large amount of dice
    alert("WASM, rolling!");

    // Nonce/Counter of mining runs.
    let mut nonce = 0;

    let headerData = i64::from_str_radix("81cd02ab7e569", 16)

    while nonce < 100000 {
        let mut header_and_nonce = headerData + nonce;

        let hasher = Sha256::new();
        hasher.input(header_and_nonce);

        let digest1 = hasher.result();
        hasher.input(digest1);

        let digest2 = hasher.result()
        
        nonce += 1;
    }

    return
}