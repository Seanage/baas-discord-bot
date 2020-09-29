
import chai, {expect} from 'chai';
import sinon from 'ts-sinon';
import {handleMessage} from './jeremy-rules';
import {Message} from 'discord.js';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);


describe('#jeremy-rules', () => {
  const fewerResponse = '*fewer';
  afterEach(()=> {
    sinon.restore();
  });

  describe('#handleMessage', ()=> {
    it('should not find a matching word', async () => {
      const message = sinon.createStubInstance(Message);
      message.content = 'no redcards today!';
      await handleMessage(message as unknown as Message);

      expect(message.reply).to.not.be.called;
    });

    it('should pipe in when someone says less.', async () => {
      const message = sinon.createStubInstance(Message);
      message.content = 'It\'s less than 3.';

      await handleMessage(message as unknown as Message);

      expect(message.reply).to.be.calledWith(fewerResponse);
    });
  });
});

