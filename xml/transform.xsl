<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
 <body>
  <h2>Questions UOG</h2>
  <table border="1">
   <tr bgcolor="#8EA1ED">
    <th>Title</th>
    <th>Option</th>
    <th>Answer</th>
   </tr>
   <xsl:for-each select="questions/question">
   <tr bgcolor="D0D9F2">
    <td><xsl:value-of select="title"/></td>
   <td>
    <xsl:for-each select="option">
     <xsl:value-of select="position()"/>: <xsl:value-of select="text()"/><br/>
    </xsl:for-each>
   </td>
   <td>
    <xsl:for-each select="answer">
     <xsl:value-of select="text()"/><br/>
    </xsl:for-each> 
   </td>
   </tr>
   </xsl:for-each>
  </table>
 </body>
</html>
</xsl:template>
</xsl:stylesheet>