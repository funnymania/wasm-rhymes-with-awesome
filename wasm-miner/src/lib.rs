mod utils;

extern crate web_sys;

use std::i64;
use sha2::{Sha256, Digest};
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

#[wasm_bindgen]
pub fn roll_many_sided_die() {
    // Roll a large amount of dice
    web_sys::console::log_1(&"WASM, rolling!".into());

    // Nonce/Counter of mining runs.
    let mut nonce = 0;

    // Identical header data to JSminer, in 10-digit format
    let header_data: i64 = 2283480209155433;

    while nonce < 100000 {
        let mut header_and_nonce = header_data + nonce as i64;

        let mut hasher = Sha256::new();
        hasher.input(header_and_nonce.to_string());

        let digest1 = hasher.result();
        // web_sys::console::log_1(&digest1[..]);

        let mut new_hash = "".to_string();
        for (el, other) in digest1.iter().enumerate() {
            new_hash.push_str(&other.to_string());
        }

        let mut hasher = Sha256::new();
        hasher.input(&new_hash);

        let digest2 = hasher.result();
        
        nonce += 1;
    }
}