<template>
  <div :id="codeId?codeId:defaultId" class="code-box"></div>
</template>
<script type="text/ecmascript-6">
  export default{
    created(){
      this.$utils.event.removeAllListener("INIT_QRCODE");
      this.$utils.event.addEventListenerOnce('INIT_QRCODE', this.initQrCode);
    },
    data(){
      return {
        src: '',
        defaultId: 'qrCode'
      }
    },
    props: {
      codeId: {
        type: String,
        default: ''
      },
      size: {
        type: Object,
        default: function ()
        {
          return {}
        }
      }
    },
    components: {},
    watch: {},
    methods: {
      initQrCode($type, $url){
        this.$nextTick(()=>
        {
          let qrCodeEl = this.getQrCodeEl(this.codeId ? this.codeId : this.defaultId);
          if (qrCodeEl)
          {
            this.creatQrCode(qrCodeEl, $url);
          }
        })
      },
      getQrCodeEl($id){
        return document.getElementById($id);
      },
      creatQrCode($el, $url){
        let qrCode = new QRCode($el, {
          width: this.size.width || 168,
          height: this.size.height || 168
        });
        qrCode.clear();
        qrCode.makeCode($url);
      }
    }
  }

</script>
<style type="text/css" lang="sass" rel="stylesheet/css" scoped>
  .code-box{
    width: 168px;
  }
</style>
