export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // 特殊处理 sitemap.xml，设置正确的 Content-Type 和缓存控制
    if (url.pathname === '/sitemap.xml' || url.pathname === '/sitemap.xml/') {
      const assetResponse = await env.ASSETS.fetch(request);
      
      if (assetResponse.ok) {
        // 读取响应体
        const body = await assetResponse.text();
        
        // 创建新响应，设置正确的 Content-Type
        // 使用 application/xml（与成功的项目一致）
        // 添加 charset 确保编码正确
        return new Response(body, {
          status: 200,
          headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
            'Access-Control-Allow-Origin': '*', // 允许跨域访问
            'X-Robots-Tag': 'index, follow', // 确保可以被搜索引擎抓取
          },
        });
      }
      
      // 如果 assets 中没有找到，返回 404
      return new Response('Sitemap not found', { status: 404 });
    }
    
    // 对于其他请求，直接返回 assets
    return env.ASSETS.fetch(request);
  }
};
