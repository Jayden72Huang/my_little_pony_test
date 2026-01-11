<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            color: #333;
            background: #f5f5f5;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          h1 {
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
          }
          .intro {
            background: #e3f2fd;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          th {
            background: #3498db;
            color: white;
            padding: 12px;
            text-align: left;
            font-weight: 600;
          }
          tr:nth-child(even) {
            background: #f9f9f9;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid #e0e0e0;
          }
          .url-cell {
            word-break: break-all;
          }
          a {
            color: #3498db;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .stats {
            display: flex;
            gap: 20px;
            margin: 20px 0;
          }
          .stat-box {
            flex: 1;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
          }
          .stat-number {
            font-size: 32px;
            font-weight: bold;
          }
          .stat-label {
            font-size: 14px;
            opacity: 0.9;
            margin-top: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🗺️ XML Sitemap</h1>

          <div class="intro">
            <p><strong>This is an XML Sitemap</strong> for search engines like Google, Bing, and Yahoo.</p>
            <p>It contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs from your website.</p>
          </div>

          <div class="stats">
            <div class="stat-box">
              <div class="stat-number">
                <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
              </div>
              <div class="stat-label">Total URLs</div>
            </div>
          </div>

          <table>
            <tr>
              <th style="width: 60%;">URL</th>
              <th>Last Modified</th>
              <th>Change Freq</th>
              <th>Priority</th>
            </tr>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td class="url-cell">
                  <a href="{sitemap:loc}">
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                </td>
                <td>
                  <xsl:value-of select="substring(sitemap:lastmod, 0, 11)"/>
                </td>
                <td>
                  <xsl:value-of select="sitemap:changefreq"/>
                </td>
                <td>
                  <xsl:value-of select="sitemap:priority"/>
                </td>
              </tr>
            </xsl:for-each>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
