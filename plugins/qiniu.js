const qiniu = require("qiniu-js")




export async function uploadFile(data) {
    const config = {
        useCdnDomain: true,
        uphost: data.domain
    }
    const putExtra = {

    }

    // const result = await new Promise((resolve,reject)=>{
    qiniu.compressImage(data.file, { quality: 0.8, noCompressIfLarger: true }).then(res => {
            const observable = qiniu.upload(res.dist, `user/avatar/${data.key}`, data.token, putExtra, config)
            observable.subscribe(data.callback)
        })
        // })

    // console.log("qiniu upload reponse:",response);

    // return result


}