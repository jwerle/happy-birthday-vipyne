{
      "targets": [{
        "target_name": "module",
        "sources": [ "module.c" ],
        "include_dirs": [
          "<!(node -e \"require('napi-macros')\")",
          "<!(node -e \"console.log(path.dirname(require.resolve('sodium-native/libsodium/src/libsodium/include/sodium.h')))\")",
        ],

        "cflags": [ "-O3", "-std=c99", "-D_GNU_SOURCE" ],
        "xcode_settings": { "OTHER_CFLAGS": [ "-O3", "-std=c99", "-D_GNU_SOURCE" ] },
        "libraries": [ "<!(node -e \"require('sodium-native/preinstall')\"  -- --print-lib)" ],
        "conditions": [
          ["OS != 'mac' and OS != 'win'", {
            "link_settings": { "libraries": [ "-Wl,-rpath=\$$ORIGIN" ] }
          }],
        ],
      }]
    }
