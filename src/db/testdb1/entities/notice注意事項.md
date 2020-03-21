# 請注意放置於此目錄時,請遵守以下規定:
1. 檔名命名規則: 一律小寫, 格式: 表格名稱.entity.ts
```
 EX: subscribetopic.entity.ts
 ```
2. 若要在class命名中含有其它大寫時, 則要指定其entity的名稱
```js
EX:

@Entity({name:'SubscribeTopic'})
export class SubscribeTopic {

```

3. class命名規則: 同資料庫的名稱, 第一個字大寫, 其餘一律小寫
```js
 EX:

import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";


@Entity()
export class Subscribetopic {


    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true, 
        })
    id:number;
        
...
```