# 文档

## 数据结构

### card

``` typescript
type AdLink = string | undefined | null

type CardContent = {
    sort: number,
    content: string,
    time?: number | null,
    adImageUrl: string | undefined | null
    adLink: AdLink
}

type Card = {
    id: string,
    name: string,
    description: string,
    tags: string[],
    adLink: AdLink,
    data: CardContent[]
}
```