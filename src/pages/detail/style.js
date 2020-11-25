import styled from 'styled-components'
const DetailBackground = styled.main`
  width: 100%;
  background-color: #f9f9f9;
`
const DetailWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 10px 16px;
  display: flex;
  background-color: #f9f9f9;
  justify-content: center;
  align-items: flex-start;
`
const ArticleInfo = styled.div`
  width: 730px;
  flex-shrink: 0;
  margin-right: 10px;
  padding: 32px;
  background-color: #fff;
`
const ArticleTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  word-break: break-all;
  color: #404040;
  box-sizing: border-box;
  margin-bottom: 15px;
`
const ArticleParagraph = styled.article`
  font-weight: 400px;
  line-height: 1.8;
  font-size: 16px;
  color: #404040;
  overflow: hidden;
  p{
    margin-bottom: 20px;
  }
  img{
    width: 590px;
    height: 380px;
    margin: 0px 30px 30px 30px;
    display: block;
  }
  b{
    font-weight: 600;
  }
  h1{
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 16px;
  }
`
const WriterInfo = styled.aside`
  flex-shrink: 0;
  width: 260px;
  background-color: red;
  height: 200px;
`
const DetailFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 56px;

  background-color: #fff;
`
export { DetailWrapper , ArticleInfo, WriterInfo, DetailFooter, ArticleTitle, ArticleParagraph, DetailBackground}