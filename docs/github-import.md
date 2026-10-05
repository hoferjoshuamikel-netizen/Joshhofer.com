# GitHub source import

GitHub repository access was restored on 24 September 2026. Because the connected GitHub app exposes repository writes through its Git data API, the preserved revisions were imported in order after an initial README commit. Each imported revision has the exact same Git tree hash as its original revision. Commit IDs differ because the import has its own parent chain and timestamps.

The original five commits are preserved on the local `archive/pre-github-2026-09-24` branch and in the existing Sites deployment repository. No history was force-pushed or deleted.

| Source commit | GitHub commit | Verified identical tree |
| --- | --- | --- |
| `190586d3d2010007683d9b67aceb8990b05b47ec` | [`1dfc2e6`](https://github.com/hoferjoshuamikel-netizen/Joshhofer.com/commit/1dfc2e6145968cbab311904e14cd32bac86f1360) | `74cc8de102d1c7c50a0c4e78843c7c357070b6f9` |
| `ef065b79a93da7993f3b0e8efe5a75358a39704b` | [`47fd378`](https://github.com/hoferjoshuamikel-netizen/Joshhofer.com/commit/47fd378925d55f057eacb7a020b91ded11f7fa5b) | `a599b6a3db3fc0420301c8bc1f3f998dd8080e30` |
| `764b8052f895e503b2444286fafa37ec0de9fd7c` | [`14e2399`](https://github.com/hoferjoshuamikel-netizen/Joshhofer.com/commit/14e2399477c79635a99f11942877a9632dd80468) | `6819e233e478d8fd59cfbfa3919eb8c794ee3629` |
| `e1936e6d8b0b386116c3e00ee93115c6dddb727d` | [`64f68cc`](https://github.com/hoferjoshuamikel-netizen/Joshhofer.com/commit/64f68cc72f9d181cbee6ef2f88957fa381ddfea4) | `2b8e5c6820ac411477f8b98e43b9d61104bd48f2` |
| `2dc95e98bbdf5333b6a04ed00498705094c62969` | [`3797231`](https://github.com/hoferjoshuamikel-netizen/Joshhofer.com/commit/3797231f4f51f45968c74dcdd5bc9c876339da39) | `617e0408e602e84ee3f97c4390ccfa692ea54af5` |

Initial canonical commit: `0d224b7a4f998c85f6ee4a008b3c8cef1deef6f7`. The imported tip was fetched back into the local repository and compared with the preserved source; the file diff was empty. Later homepage updates use the same complete-tree verification before deployment. GitHub remains the source of truth; the deployment mirror may have different commit ancestry but must contain identical source files for the released revision.

