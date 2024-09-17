import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";




function EditorView({ data, className }) {
    const [editorLoaded, setEditorLoaded] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setEditorLoaded(true);
        }
    }, []);

    if (!editorLoaded) {
        return null;
    }

    const { Editor } = require("react-draft-wysiwyg");
    const { EditorState, ContentState } = require("draft-js");
    const htmlToDraft = require("html-to-draftjs").default;

    let editorState = EditorState.createEmpty();
    if (data) {
        const contentBlock = htmlToDraft(data);
        const contentState = ContentState.createFromBlockArray(
            contentBlock.contentBlocks
        );
        editorState = EditorState.createWithContent(contentState);
    }
    return (
        <Editor
            editorState={editorState}
            wrapperClassName='demo-wrapper'
            editorClassName={`richText-editor ${className}`}
            toolbarHidden={true}
            readOnly={true}
        />
    )
}

export default EditorView