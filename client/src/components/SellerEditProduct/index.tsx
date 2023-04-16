import SellerPageHeader from "../SellerPageHeader";
import { EditProduct } from "./index.styles";
import { useState } from "react";
import { Input, Button, NumberInput, Image, Text } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from "@mantine/dropzone";
import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
type Props = {};

const content =
  '<h2>Product Tittle</h2><p>Product Description <a href="https://example.com/" rel="noopener noreferrer" target="_blank">Link</a> rest description</p><ul><li>List</li><li>List</li><li>List</li><li>List</li><li>List</li></ul>';

function index({}: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content,
  });
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      />
    );
  });
  return (
    <>
      <SellerPageHeader pageName="Edit product" />
      <div className="pageDefaultStyle">
        <div className="container">
          <EditProduct method="POST">
            <div className="editProductInput">
              <label htmlFor="Product Image:">Product Image:</label>
              <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
                <Text align="center">
                  {files.length > 0 ? previews : "Drop images here"}
                </Text>
              </Dropzone>
            </div>
            <Input.Wrapper label="Product name:" className="editProductInput">
              <Input placeholder="eg. Camera shop" value="Macbook pro" />
            </Input.Wrapper>
            <NumberInput
              label="Product price:"
              defaultValue={1000}
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              formatter={(value) =>
                !Number.isNaN(parseFloat(value))
                  ? `$ ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                  : "$ "
              }
            />
            <div className="editProductInput">
              <label htmlFor="Product Description:">Product Description:</label>
              <RichTextEditor editor={editor}>
                <RichTextEditor.Toolbar sticky stickyOffset={60}>
                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Bold />
                    <RichTextEditor.Italic />
                    <RichTextEditor.Underline />
                    <RichTextEditor.Strikethrough />
                    <RichTextEditor.ClearFormatting />
                    <RichTextEditor.Highlight />
                    <RichTextEditor.Code />
                  </RichTextEditor.ControlsGroup>

                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.H1 />
                    <RichTextEditor.H2 />
                    <RichTextEditor.H3 />
                    <RichTextEditor.H4 />
                  </RichTextEditor.ControlsGroup>

                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Blockquote />
                    <RichTextEditor.Hr />
                    <RichTextEditor.BulletList />
                    <RichTextEditor.OrderedList />
                    <RichTextEditor.Subscript />
                    <RichTextEditor.Superscript />
                  </RichTextEditor.ControlsGroup>

                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Link />
                    <RichTextEditor.Unlink />
                  </RichTextEditor.ControlsGroup>

                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.AlignLeft />
                    <RichTextEditor.AlignCenter />
                    <RichTextEditor.AlignJustify />
                    <RichTextEditor.AlignRight />
                  </RichTextEditor.ControlsGroup>
                </RichTextEditor.Toolbar>

                <RichTextEditor.Content />
              </RichTextEditor>
            </div>
            <Button color="dark">Save changes</Button>
          </EditProduct>
        </div>
      </div>
    </>
  );
}

export default index;
