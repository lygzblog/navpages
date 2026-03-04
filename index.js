// ========== 边缘函数：平头哥精品业务导航 ==========

// HTML模板函数
function getHTMLTemplate() {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>平头哥 | 精品业务导航</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            color: #fff;
            min-height: 100vh;
            line-height: 1.6;
            overflow-x: hidden;
        }
        
        .bg-decoration {
            position: fixed;
            width: 600px;
            height: 600px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
            top: -200px;
            left: -200px;
            z-index: -1;
            pointer-events: none;
        }
        
        .bg-decoration-2 {
            position: fixed;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
            bottom: -100px;
            right: -100px;
            z-index: -1;
            pointer-events: none;
        }
        
        .container { max-width: 1000px; margin: 0 auto; padding: 20px; }
        
        header { text-align: center; padding: 60px 20px 40px; }
        
        .brand-tag {
            display: inline-block;
            padding: 6px 16px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            font-size: 0.9rem;
            margin-bottom: 15px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(5px);
        }
        
        h1 {
            font-size: 2.5rem;
            background: linear-gradient(to right, #38bdf8, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 15px;
            font-weight: 800;
        }
        
        .intro-text { max-width: 700px; margin: 0 auto; color: rgba(255, 255, 255, 0.8); font-size: 1rem; }
        
        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 30px;
            margin-bottom: 30px;
            transition: transform 0.3s ease;
        }
        
        .glass-card:hover { transform: translateY(-5px); border: 1px solid rgba(255, 255, 255, 0.3); }
        
        .section-title { font-size: 1.5rem; margin-bottom: 10px; display: flex; align-items: center; gap: 10px; }
        .section-title::before { content: ''; display: block; width: 6px; height: 24px; background: #38bdf8; border-radius: 3px; }
        .section-desc { color: rgba(255, 255, 255, 0.7); margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
        .item { margin-bottom: 25px; padding-bottom: 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
        .item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
        .item h3 { font-size: 1.1rem; margin-bottom: 8px; color: #e2e8f0; }
        .item p { font-size: 0.9rem; color: rgba(255, 255, 255, 0.6); margin-bottom: 12px; }
        .btn-group { display: flex; flex-wrap: wrap; gap: 10px; }
        
        .btn {
            display: inline-block;
            padding: 10px 20px;
            background: rgba(56, 189, 248, 0.2);
            color: #38bdf8;
            text-decoration: none;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 500;
            border: 1px solid rgba(56, 189, 248, 0.3);
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .btn:hover { background: rgba(56, 189, 248, 0.4); color: #fff; box-shadow: 0 0 15px rgba(56, 189, 248, 0.4); transform: translateY(-2px); }
        .btn-secondary { background: rgba(255, 255, 255, 0.1); color: #fff; border: 1px solid rgba(255, 255, 255, 0.2); }
        .btn-secondary:hover { background: rgba(255, 255, 255, 0.2); color: #fff; box-shadow: 0 0 15px rgba(255, 255, 255, 0.1); }
        .tag { display: inline-block; padding: 2px 8px; background: rgba(139, 92, 246, 0.2); color: #a78bfa; border-radius: 4px; font-size: 0.75rem; margin-right: 5px; vertical-align: middle; }
        footer { text-align: center; padding: 40px 20px; color: rgba(255, 255, 255, 0.4); font-size: 0.8rem; }
        
        @media (max-width: 768px) {
            h1 { font-size: 1.8rem; }
            .container { padding: 10px; }
            .glass-card { padding: 20px; }
            .btn { width: 100%; text-align: center; }
        }
    <\/style>
</head>
<body>
    <div class="bg-decoration"><\/div>
    <div class="bg-decoration-2"><\/div>
    
    <header>
        <div class="brand-tag">作者：平头哥<\/div>
        <h1>平头哥资源导航页<\/h1>
        <p class="intro-text">本页所有展示的业务均来自平头哥旗下，大家可以放心使用，也可以推荐给自己朋友。<\/p>
    <\/header>
    
    <div class="container">
        <div class="glass-card">
            <h2 class="section-title">一、旗下业务专区<\/h2>
            <p class="section-desc">精选稳定业务，涵盖流量、影音、生活优惠，主打"该省省该花花"。<\/p>
            
            <div class="item">
                <h3><span class="tag">推荐<\/span>流量卡业务区<\/h3>
                <p>针对手机卡话费贵、流量不足等问题，推荐稳定可靠的手机卡，根据需求自行选择。<\/p>
                <div class="btn-group">
                    <a href="http://yc.hk11w.cn/index?k=NGJRZHdWRXBlTjQ9" target="_blank" class="btn">流量卡推荐一<\/a>
                    <a href="https://h5.lot-ml.com/ProductEn/Index/843935c346f858ba" target="_blank" class="btn">流量卡推荐二<\/a>
                    <a href="https://h5.gantanhao.com/url?value=Emnnu1760771051949" target="_blank" class="btn">流量卡推荐三<\/a>
                <\/div>
            <\/div>
            
            <div class="item">
                <h3><span class="tag">福利<\/span>苹果ID业务区<\/h3>
                <p>针对苹果用户下载小火箭等工具，全网超低价，9.9元提供至少10个美区ID。<\/p>
                <div class="btn-group">
                    <a href="http://apple.ptger.cn/" target="_blank" class="btn">自动获取ID<\/a>
                    <a href="javascript:void(0)" class="btn btn-secondary" onclick="copyButtonText('lygzblog');">点击复制联系方式<\/a>
                <\/div>
            <\/div>
            
            <div class="item">
                <h3><span class="tag">生活<\/span>外卖平台优惠券业务区<\/h3>
                <p>专注各大平台福利活动线报，点外卖、打车、饮料前先领券，省钱才是硬道理。<\/p>
                <div class="btn-group">
                    <a href="http://tip.ptger.cn/" target="_blank" class="btn">领取外卖红包<\/a>
                <\/div>
            <\/div>
            
            <div class="item">
                <h3><span class="tag">影音<\/span>电影票业务区<\/h3>
                <p>针对电影票太贵的问题，扫码对比同时间段同影院价格，低价购票。<\/p>
                <div style="margin: 12px 0; text-align: center;">
                    <img src="https://cdnimg.lygzblog.cn/20260214213735178.webp" alt="影视会员低价渠道示例" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.5);">
                <\/div>
            <\/div>
            
            <div class="item">
                <h3><span class="tag">影音<\/span>影视会员业务区<\/h3>
                <p>本业务主要针对各种影视会员低价渠道，支持300+种会员权益，还是那句话该省省该花花！<\/p>
                <div class="btn-group">
                    <a href="https://99.98kami.com/index?pid=95536" target="_blank" class="btn">低价影视会员入口<\/a>
                <\/div>
            <\/div>
        <\/div>
        
        <div class="glass-card">
            <h2 class="section-title">二、实用工具专区<\/h2>
            <p class="section-desc">提升效率的工具集合，包含去水印、查询、网络工具等。<\/p>
            
            <div class="item">
                <h3>短视频去水印<\/h3>
                <p>支持快手、抖音短视频去水印，永久免费使用。<\/p>
                <div class="btn-group">
                    <a href="http://qsy.ptger.cn/" target="_blank" class="btn">立即去水印<\/a>
                <\/div>
            <\/div>
            
            <div class="item">
                <h3>药物说明书大全<\/h3>
                <p>查询各种药物详情说明，了解药物具体作用与禁忌。<\/p>
                <div class="btn-group">
                    <a href="http://drug.ptger.cn/" target="_blank" class="btn">查询药物说明书<\/a>
                <\/div>
            <\/div>
            
            <div class="item">
                <h3>梯子节点<\/h3>
                <p>用于交流学习拓展全球知识领域，懂的都懂！已经稳定使用2年，不限制设备、不限制时间！<\/p>
                <div class="btn-group">
                    <a href="https://ourl.cn/Kvuudb" target="_blank" class="btn">访问地址<\/a>
                <\/div>
            <\/div>
            
            <div class="item">
                <h3>代理IP<\/h3>
                <p>便宜好用的代理IP，适合爬虫、机票、注册、养号、投票助力。<\/p>
                <div class="btn-group">
                    <a href="https://ourl.cn/XzWAPt" target="_blank" class="btn">代理IP推荐一<\/a>
                    <a href="https://www.xiequ.cn/" target="_blank" class="btn">代理IP推荐二<\/a>
                <\/div>
            <\/div>
            
            <div class="item">
                <h3>国外虚拟卡<\/h3>
                <p>一张虚拟卡，直接支付 AI 订阅。开卡即用卡号秒到，填写邀请码注册赠送1USDT，搞定 ChatGPT Plus 和 Claude Max，只需一张卡！<\/p>
                <div class="btn-group">
                    <a href="https://aipaycards.com/register?ref=5ZTKKIQR" target="_blank" class="btn">前往开卡<\/a>
                <\/div>
            <\/div>
            
            <div class="item">
                <h3><span class="tag">热门<\/span>顶级模型 x 最低价<\/h3>
                <p>一个API玩转所有顶级AI模型，视频3毛钱一秒钟，图片几分钱一张，打爆市面上AI接口平台！<\/p>
                <div class="btn-group">
                    <a href="https://kie.ai/?ref=acda7ad0e1dd3daf8a44be56d2c0be64" target="_blank" class="btn">立即体验<\/a>
                <\/div>
            <\/div>
        <\/div>
        
        <div class="glass-card">
            <h2 class="section-title">三、其他业务<\/h2>
            <p class="section-desc">部分业务可能需要魔法上网访问，请注意网络环境。<\/p>
            
            <div class="item">
                <h3><span class="tag">赚钱<\/span>做任务赚钱<\/h3>
                <p>任推帮 - 完成任务赚赏金，官方大平台可靠有保障！<\/p>
                <div class="btn-group">
                    <a href="https://dt.bd.cn/#/pages/login/register?invite_code=264727&qd=self_fans_android" target="_blank" class="btn">立即注册<\/a>
                <\/div>
            <\/div>
            
            <div class="item">
                <h3>主流交易所导航<\/h3>
                <p>需要魔法上网复制浏览器访问。<\/p>
                <div class="btn-group">
                    <a href="https://www.hfivpyichgod.com/join/30209681" target="_blank" class="btn btn-secondary">欧易<\/a>
                    <a href="https://153.43.29.63/invite/zh-cn/1f?invite_code=we5t7223" target="_blank" class="btn btn-secondary">火币<\/a>
                    <a href="https://accounts.bmwweb.ac/register?ref=724485486" target="_blank" class="btn btn-secondary">币安<\/a>
                <\/div>
            <\/div>
        <\/div>
    <\/div>
    
    <footer>
        <p>&copy; 平头哥 出品 | 只推精品，放心使用<\/p>
        <p style="margin-top:10px; font-size: 0.7rem; opacity: 0.6;">免责声明：本页仅提供信息导航，请合规使用相关服务。<\/p>
    <\/footer>
    
    <script>
        function copyButtonText(btn) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText("lygzblog").then(function () {
                    alert('已复制微信号');
                });
            } else {
                var input = document.createElement('input');
                input.style.position = 'fixed';
                input.style.opacity = '0';
                input.value = "lygzblog";
                document.body.appendChild(input);
                input.select();
                try {
                    document.execCommand('copy');
                    alert('已复制微信号');
                } catch (e) {
                    alert('当前浏览器不支持自动复制，请手动复制：lygzblog');
                }
                document.body.removeChild(input);
            }
        }
    <\/script>
<\/body>
<\/html>`;
}

// ⭐⭐⭐ 关键：主处理函数（必须有）⭐⭐⭐
async function handleRequest(request) {
  const html = getHTMLTemplate();
  
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
      "cache-control": "public, max-age=3600"
    }
  });
}

// ⭐⭐⭐ 关键：导出默认对象（必须有）⭐⭐⭐
export default {
  async fetch(request, env, ctx) {
    return handleRequest(request);
  }
};
