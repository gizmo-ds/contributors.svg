<div align="center">

# contributors.svg

[![爱发电](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fafdian.net%2Fapi%2Fuser%2Fget-profile%3Fuser_id%3D75e549844b5111ed8df552540025c377&query=%24.data.user.name&label=%E7%88%B1%E5%8F%91%E7%94%B5&color=%23946ce6)](https://afdian.net/a/gizmo)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-%E2%9D%A4%EF%B8%8F-blue?logo=kofi&color=%23fff)](https://ko-fi.com/gizmo_)
[![License](https://img.shields.io/github/license/gizmo-ds/contributors.svg.svg)](./LICENSE)

Generate an SVG image of contributors to keep your README.md synchronized.

</div>

## How to use

```markdown
https://contributors.liuli.lol/{owner}/{repo}/contributors.svg
```

Options:

- `owner` - The account owner of the repository. The name is not case sensitive.
- `repo` - The name of the repository without the .git extension. The name is not case sensitive.
- `width` - ViewBox width, Default: `800`
- `margin` - ViewBox margin, Default: `8`
- `size` - Avatar size, Default: `64`
- `pad` - Avatar padding, Default: `8`
- `bot` - Include bot users, Default: `false`
- `max` - Max contributor count, Default: `100`
- `hide_border` - Hide border, Default: `false`
- `border_color` - Color of border, Default: `#c0c0c0`
- `maxage` - Browser cache time, measured in seconds, Default: `7200`.

## Demo

```markdown
![Vite contributors](https://contributors.liuli.lol/vitejs/vite/contributors.svg?max=44)
```

![Vite contributors](https://contributors.liuli.lol/vitejs/vite/contributors.svg?max=44)

## Deploy on your own

### On Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgizmo-ds%2Fcontributors.svg)

Environment variables

- `GITHUB_TOKEN` - Optional, Due to the limitation of 5k requests per hour on the GitHub API, setting the `GITHUB_TOKEN` allows for more requests to be made per hour.

### On other platforms

[Deploy on other platforms](https://nitro.unjs.io/deploy/providers/deno)
