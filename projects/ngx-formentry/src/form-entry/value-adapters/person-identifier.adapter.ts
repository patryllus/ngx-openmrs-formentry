import { Injectable } from '@angular/core';

import { NodeBase, GroupNode, ArrayNode } from '../form-factory/form-node';
import { Form } from '../form-factory/form';
import { ValueAdapter } from './value.adapter';

@Injectable()
export class PersonIdentifierAdapter implements ValueAdapter {
  FormIdentifierNodes = []
  identifierPayload = {}

  generateFormPayload(form: Form) {
    this.FormIdentifierNodes = []
    this._findTestOrderQuestionNodes(form.rootNode);
console.log("payload", this.identifierPayload)

  return this.identifierPayload
    //return this.generateNodePayload(form.rootNode);
  
}
  populateForm(form: Form, payload) {
    this.populateNode(form.rootNode, payload);
  }

  populateNode(rootNode: NodeBase, payload) {
    if (!Array.isArray(payload)) {
      throw new Error('Expected an array of identifiers');
    }

    const node = this._findTestOrderQuestionNodes(rootNode);
    console.log("Hey", node)
    this.FormIdentifierNodes.forEach((node) => {
      payload.forEach((element) => {
        if (
          element.identifierType.uuid ===
          node.question.extras.questionOptions.identifierType
        ) {
          if (element.value.uuid) {
            node.control.setValue(element.value.uuid);
            node.initialValue = element.value.uuid;
          } else {
            node.control.setValue(element.value);
            node.initialValue = element.value;
          }
        }
    });
  });
  }
  private _findTestOrderQuestionNodes(formNode) {
    if (formNode.children) {
      if (formNode.children instanceof Object) {
        for (const key in formNode.children) {
          if (formNode.children.hasOwnProperty(key)) {
            switch (formNode.children[key].question.renderingType) {
              case 'page':
                this._findTestOrderQuestionNodes(formNode.children[key]);
                break;
              case 'section':
                this._findTestOrderQuestionNodes(formNode.children[key]);
                break;
              case 'group':
                this._findTestOrderQuestionNodes(formNode.children[key]);

                break;
              case 'text':
                if (formNode.children) {
                  // tslint:disable-next-line:forin
                  for (const node in formNode.children) {
                    const question = formNode.children[node].question;
                    if (
                      question.extras &&
                      question.extras.type === 'personIdentifier'
                    ) {
                      console.log("node",formNode?.children[node])
                      console.log("node",formNode.children[node].control.value)
                      console.log("identifierType",question.extras)
                      this.identifierPayload = {identifierType:question.extras.questionOptions.identifierType,value:formNode.children[node].control.value}
                      this.FormIdentifierNodes.push(formNode);
                    }
                  }
                }
                break;
              default:
                break;
            }
          }
        }
      }
    }
  }
}

