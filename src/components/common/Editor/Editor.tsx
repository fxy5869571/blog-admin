// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import * as React from 'react'
import './style.less'
interface IProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}
interface IEditor {
  loaded: number
  total: number
}
class Editor extends React.Component<IProps> {
  public uploadFn = (param: any) => {
    const serverURL = 'http://adm.qqzi.com/Home/UploadImage'
    const xhr = new XMLHttpRequest()
    const fd = new FormData()
    const successFn = () =>
      param.success({ url: JSON.parse(xhr.responseText).Result })
    const progressFn = (event: IEditor) =>
      param.progress((event.loaded / event.total) * 100)
    const errorFn = () => param.error({ msg: 'unable to upload.' })
    xhr.upload.addEventListener('progress', progressFn, false)
    xhr.addEventListener('load', successFn, false)
    xhr.addEventListener('error', errorFn, false)
    xhr.addEventListener('abort', errorFn, false)
    fd.append('file', param.file)
    xhr.open('POST', serverURL, true)
    xhr.send(fd)
  }
  public handleChange = (content: string) => {
    if (this.props.onChange) {
      this.props.onChange(content)
    }
  }
  public render() {
    const editorProps = {
      contentFormat: 'html',
      height: 500,
      initialContent: this.props.value,
      media: {
        allowPasteImage: true, // 是否允许直接粘贴剪贴板图片（例如QQ截图等）到编辑器
        image: true, // 开启图片插入功能
        uploadFn: this.uploadFn // 指定上传函数，说明见下文
      },
      onChange: this.handleChange,
      placeholder:
        this.props.placeholder ||
        '发表文章，记录自己这段时间的学习，技术需要沉淀'
    }
    return (
      <div className="braft-editor">
        <BraftEditor {...editorProps} />
      </div>
    )
  }
}

export default Editor
